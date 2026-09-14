---
schema: wang-person/v1
id: p_GBexWpRG714qmm2J7TtZqA
status: active
merged_into: null
display_name: 王璞
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Nw9QKCLuLE2Phbbb5ur3P1
        subject_person_id: p_GBexWpRG714qmm2J7TtZqA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hPqCkMj5tUcMV3hCsPQWhX
          claim_id: c_Nw9QKCLuLE2Phbbb5ur3P1
          source_id: s_hHkSb885y8t2X6FHLSyPPM
          stance: supports
          locator: CBDB:230882
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（230882）
          source: &a1
            id: s_hHkSb885y8t2X6FHLSyPPM
            source_type: api_record
            title: 中国历代人物传记资料库：王璞（CBDB 230882）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230882&o=json
            external_identifier: CBDB:230882
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.628Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RQM4ph2DDkbypZLPuMQ1xW
        subject_person_id: p_GBexWpRG714qmm2J7TtZqA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璞，明人物。萬曆丙戌科進士進士，籍贯清遠。（中国历代人物传记资料库 CBDB 230882）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DiznPkcfuxY3bz5Cakb7xX
          claim_id: c_RQM4ph2DDkbypZLPuMQ1xW
          source_id: s_hHkSb885y8t2X6FHLSyPPM
          stance: supports
          locator: CBDB:230882
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_-9-cAxup1NVM62EaxRPvnJ
        subject_person_id: p_6tdTGr8WHYZiKQmeHZ5QVe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GBexWpRG714qmm2J7TtZqA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_j1on34CZEVEsMC8jJq9Jh9
          claim_id: c_-9-cAxup1NVM62EaxRPvnJ
          source_id: s_68TSNj5rXumEMrlY-QIRbZ
          stance: supports
          locator: CBDB：兄弟 王玠（207286）之父／母 王宗源
          quotation: null
          interpretation_note: 由兄弟关系推断：王璞 与 王玠 为同胞（CBDB 记「兄」），王玠 之父／母即 王璞 之父／母。
          source:
            id: s_68TSNj5rXumEMrlY-QIRbZ
            source_type: api_record
            title: 中国历代人物传记资料库：王璞（CBDB 230882）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230882&o=json
            external_identifier: CBDB:230882
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6tdTGr8WHYZiKQmeHZ5QVe
        status: active
        display_name: 王宗源
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_w_02jMWyFhlSoRPqf7Bjqk
        subject_person_id: p_EAKJt6kT5T4F5kcYrF9f6y
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_GBexWpRG714qmm2J7TtZqA
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tl1PO9Y0WDuUEfAfpebHTh
          claim_id: c_w_02jMWyFhlSoRPqf7Bjqk
          source_id: s_68TSNj5rXumEMrlY-QIRbZ
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207286 王玠）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_68TSNj5rXumEMrlY-QIRbZ
            source_type: api_record
            title: 中国历代人物传记资料库：王璞（CBDB 230882）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230882&o=json
            external_identifier: CBDB:230882
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EAKJt6kT5T4F5kcYrF9f6y
        status: active
        display_name: 王玠
        merged_into_person_id: null
---

# 王璞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璞 | accepted |
| bio.summary | 王璞，明人物。萬曆丙戌科進士進士，籍贯清遠。（中国历代人物传记资料库 CBDB 230882） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_6tdTGr8WHYZiKQmeHZ5QVe | 王宗源 | accepted |
| other | p_EAKJt6kT5T4F5kcYrF9f6y | 王玠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王璞（CBDB 230882）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230882&o=json)
