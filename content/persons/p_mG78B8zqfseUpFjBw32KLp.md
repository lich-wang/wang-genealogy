---
schema: wang-person/v1
id: p_mG78B8zqfseUpFjBw32KLp
status: active
merged_into: null
display_name: 王賢
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GE4C4b9KDU63jo4Jm1nCkq
        subject_person_id: p_mG78B8zqfseUpFjBw32KLp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王賢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_L2vwDBhz4twydGPgiRUHFs
          claim_id: c_GE4C4b9KDU63jo4Jm1nCkq
          source_id: s_3VVo3picG4ja3paAFfLZ4w
          stance: supports
          locator: CBDB:254320
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（254320）
          source: &a1
            id: s_3VVo3picG4ja3paAFfLZ4w
            source_type: api_record
            title: 中国历代人物传记资料库：王賢（CBDB 254320）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=254320&o=json
            external_identifier: CBDB:254320
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.320Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zK61jrL99eB8xk5ZewfNHg
        subject_person_id: p_mG78B8zqfseUpFjBw32KLp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王賢，明人物。建文二年殿試進士，籍贯鳳陽。（中国历代人物传记资料库 CBDB 254320）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_IoVI_20F0nqTPHRhI4CPx2
          claim_id: c_zK61jrL99eB8xk5ZewfNHg
          source_id: s_3VVo3picG4ja3paAFfLZ4w
          stance: supports
          locator: CBDB:254320
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_zLIgjzrclG-Nb7n-lz-wRB
        subject_person_id: p_pFSA3Pi5dHh2f8sJZouAuT
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mG78B8zqfseUpFjBw32KLp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_V6rk9mMBVnNCgq9iQ1TQPL
          claim_id: c_zLIgjzrclG-Nb7n-lz-wRB
          source_id: s_viRFb0xQzKSJ4CSJmB2efZ
          stance: supports
          locator: CBDB：兄弟 王能（200150）之父／母 王士廉
          quotation: null
          interpretation_note: 由兄弟关系推断：王賢 与 王能 为同胞（CBDB 记「弟」），王能 之父／母即 王賢 之父／母。
          source:
            id: s_viRFb0xQzKSJ4CSJmB2efZ
            source_type: api_record
            title: 中国历代人物传记资料库：王賢（CBDB 254320）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=254320&o=json
            external_identifier: CBDB:254320
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_pFSA3Pi5dHh2f8sJZouAuT
        status: active
        display_name: 王士廉
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_haRXbM_NIwHc1d20xvU_9E
        subject_person_id: p_mG78B8zqfseUpFjBw32KLp
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_oPLWhhcUgR56XRswCqgGBJ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WSmTP9-DFzLclFp6w0nX36
          claim_id: c_haRXbM_NIwHc1d20xvU_9E
          source_id: s_viRFb0xQzKSJ4CSJmB2efZ
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200150 王能）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_viRFb0xQzKSJ4CSJmB2efZ
            source_type: api_record
            title: 中国历代人物传记资料库：王賢（CBDB 254320）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=254320&o=json
            external_identifier: CBDB:254320
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_oPLWhhcUgR56XRswCqgGBJ
        status: active
        display_name: 王能
        merged_into_person_id: null
---

# 王賢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王賢 | accepted |
| bio.summary | 王賢，明人物。建文二年殿試進士，籍贯鳳陽。（中国历代人物传记资料库 CBDB 254320） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_pFSA3Pi5dHh2f8sJZouAuT | 王士廉 | accepted |
| other | p_oPLWhhcUgR56XRswCqgGBJ | 王能 | accepted |

## 外部来源

- [中国历代人物传记资料库：王賢（CBDB 254320）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=254320&o=json)
