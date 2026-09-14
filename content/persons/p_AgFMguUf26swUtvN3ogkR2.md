---
schema: wang-person/v1
id: p_AgFMguUf26swUtvN3ogkR2
status: active
merged_into: null
display_name: 王賓
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_38DHBg5wGCCvWoEEP1v763
        subject_person_id: p_AgFMguUf26swUtvN3ogkR2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王賓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_b3y7MH27g5CHD6Pr6oJUnS
          claim_id: c_38DHBg5wGCCvWoEEP1v763
          source_id: s_dwtfZC1Hn84ANLBoxzrvuF
          stance: supports
          locator: CBDB:22126
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（22126）
          source: &a1
            id: s_dwtfZC1Hn84ANLBoxzrvuF
            source_type: api_record
            title: 中国历代人物传记资料库：王賓（CBDB 22126）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22126&o=json
            external_identifier: CBDB:22126
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.828Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4V4C29ZCKvruCmWkwDuFUT
        subject_person_id: p_AgFMguUf26swUtvN3ogkR2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王賓，宋人物。籍贯閩縣，入仕進士，曾任禮部尚書、三公、尚書省刑部尚書。（中国历代人物传记资料库 CBDB 22126）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_U4iEe5neL76vzD1Y-Ut7gy
          claim_id: c_4V4C29ZCKvruCmWkwDuFUT
          source_id: s_dwtfZC1Hn84ANLBoxzrvuF
          stance: supports
          locator: CBDB:22126
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_Grkkkcc3Aym0rPu4F2-McX
        subject_person_id: p_AgFMguUf26swUtvN3ogkR2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EHXezwjnaZXTG6Z35v48Mv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fOnEnB_W0aMPPtOrr2bFJn
          claim_id: c_Grkkkcc3Aym0rPu4F2-McX
          source_id: s_dwtfZC1Hn84ANLBoxzrvuF
          stance: supports
          locator: CBDB 双向互证（子 王普 ⇄ 父 王賓）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_EHXezwjnaZXTG6Z35v48Mv
        status: active
        display_name: 王普
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_9uchcDDllyggV6127QCi11
        subject_person_id: p_AgFMguUf26swUtvN3ogkR2
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_HeSteyQfSp2Q1nSoVhQY83
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VpoU0KjjDL_fuF-IpJS7fI
          claim_id: c_9uchcDDllyggV6127QCi11
          source_id: s_OhtHjb3zjiAhZQ_Kt_jGSn
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 22126 王賓）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_OhtHjb3zjiAhZQ_Kt_jGSn
            source_type: api_record
            title: 中国历代人物传记资料库：王寧（CBDB 22127）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22127&o=json
            external_identifier: CBDB:22127
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HeSteyQfSp2Q1nSoVhQY83
        status: active
        display_name: 王寧
        merged_into_person_id: null
---

# 王賓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王賓 | accepted |
| bio.summary | 王賓，宋人物。籍贯閩縣，入仕進士，曾任禮部尚書、三公、尚書省刑部尚書。（中国历代人物传记资料库 CBDB 22126） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_EHXezwjnaZXTG6Z35v48Mv | 王普 | accepted |
| other | p_HeSteyQfSp2Q1nSoVhQY83 | 王寧 | accepted |

## 外部来源

- [中国历代人物传记资料库：王賓（CBDB 22126）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22126&o=json)
- [中国历代人物传记资料库：王寧（CBDB 22127）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22127&o=json)
