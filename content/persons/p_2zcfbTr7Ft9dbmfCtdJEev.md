---
schema: wang-person/v1
id: p_2zcfbTr7Ft9dbmfCtdJEev
status: active
merged_into: null
display_name: 王時興
cbdb_id: 236522
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EaDoDKLsLK5mM3Az39mMNi
        subject_person_id: p_2zcfbTr7Ft9dbmfCtdJEev
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時興，明人物。籍贯魏縣。（中国历代人物传记资料库 CBDB 236522）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_VZYrNJTcH6mXs95m7HfwoI
          claim_id: c_EaDoDKLsLK5mM3Az39mMNi
          source_id: s_WuGyM9NZsMsEZDK9thGRnk
          stance: supports
          locator: CBDB:236522
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_WuGyM9NZsMsEZDK9thGRnk
            source_type: api_record
            title: 中国历代人物传记资料库：王時興（CBDB 236522）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236522&o=json
            external_identifier: CBDB:236522
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.856Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_bpNr1XnphwKriT5HWNxb9S
        subject_person_id: p_2zcfbTr7Ft9dbmfCtdJEev
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時興
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_EPUiob6LekHzmVS2mfh9hN
          claim_id: c_bpNr1XnphwKriT5HWNxb9S
          source_id: s_WuGyM9NZsMsEZDK9thGRnk
          stance: supports
          locator: CBDB:236522
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2801-2900）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_JECXWd2I0f52BCh60EbThi
        subject_person_id: p_9wDw1cnSCGgEg7vtH1AinD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2zcfbTr7Ft9dbmfCtdJEev
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3wAAx-RBgqMwrWQAfJ53C4
          claim_id: c_JECXWd2I0f52BCh60EbThi
          source_id: s_1dEOK9D49kgtQ0MoRBuMUT
          stance: supports
          locator: CBDB：兄弟 王時和（207820）之父／母 王思忠
          quotation: null
          interpretation_note: 由兄弟关系推断：王時興 与 王時和 为同胞（CBDB 记「兄」），王時和 之父／母即 王時興 之父／母。
          source:
            id: s_1dEOK9D49kgtQ0MoRBuMUT
            source_type: api_record
            title: 中国历代人物传记资料库：王時興（CBDB 236522）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236522&o=json
            external_identifier: CBDB:236522
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_9wDw1cnSCGgEg7vtH1AinD
        status: active
        display_name: 王思忠
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_1CZOcxPuyvVFf7gBlTIwf0
        subject_person_id: p_2zcfbTr7Ft9dbmfCtdJEev
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fNnEAvuY1BBmarjaAEXknF
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Dd55kXsBXPKTimJnohqROq
          claim_id: c_1CZOcxPuyvVFf7gBlTIwf0
          source_id: s_1dEOK9D49kgtQ0MoRBuMUT
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207820 王時和）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_1dEOK9D49kgtQ0MoRBuMUT
            source_type: api_record
            title: 中国历代人物传记资料库：王時興（CBDB 236522）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236522&o=json
            external_identifier: CBDB:236522
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fNnEAvuY1BBmarjaAEXknF
        status: active
        display_name: 王時和
        merged_into_person_id: null
---

# 王時興

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王時興，明人物。籍贯魏縣。（中国历代人物传记资料库 CBDB 236522） | accepted |
| name.primary | 王時興 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_9wDw1cnSCGgEg7vtH1AinD | 王思忠 | accepted |
| other | p_fNnEAvuY1BBmarjaAEXknF | 王時和 | accepted |

## 外部来源

- [中国历代人物传记资料库：王時興（CBDB 236522）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236522&o=json)
