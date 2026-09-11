---
schema: wang-person/v1
id: p_cz4BQgsickbVfDGrPHBAYX
status: active
merged_into: null
display_name: 王端
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YNKGWoNhCBdXsr1VNL2ibi
        subject_person_id: p_cz4BQgsickbVfDGrPHBAYX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王端
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fVVQisiPP4kEZuDF9xE5JC
          claim_id: c_YNKGWoNhCBdXsr1VNL2ibi
          source_id: s_otdA7k7yDpqaJ97UnaDdVK
          stance: supports
          locator: CBDB:39130
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（39130）
          source: &a1
            id: s_otdA7k7yDpqaJ97UnaDdVK
            source_type: api_record
            title: 中国历代人物传记资料库：王端（CBDB 39130）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39130&o=json
            external_identifier: CBDB:39130
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.598Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SViaJcXqrotphbFBiBuNju
        subject_person_id: p_cz4BQgsickbVfDGrPHBAYX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王端，宋人物。籍贯山東，身份为畫家、好學，曾任右班殿直。（中国历代人物传记资料库 CBDB 39130）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_81ts0QdcBq5dhZSLes9_co
          claim_id: c_SViaJcXqrotphbFBiBuNju
          source_id: s_otdA7k7yDpqaJ97UnaDdVK
          stance: supports
          locator: CBDB:39130
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_dyNfaOv7cfM2uidJNGU8cI
        subject_person_id: p_56q5oQWe8juXsC1XW2nxj3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cz4BQgsickbVfDGrPHBAYX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_V2SXHZSHyO_wjFSPMZlJXz
          claim_id: c_dyNfaOv7cfM2uidJNGU8cI
          source_id: s_3xaCC8qtNGiK24NN4TP5Tk
          stance: supports
          locator: 宋人傳記資料索引(電子版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_3xaCC8qtNGiK24NN4TP5Tk
            source_type: api_record
            title: 中国历代人物传记资料库：王瓘（CBDB 39133）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39133&o=json
            external_identifier: CBDB:39133
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.598Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_56q5oQWe8juXsC1XW2nxj3
        status: active
        display_name: 王瓘
        merged_into_person_id: null
    - claim:
        id: c_sNP2rmf2PYCxPYGD6z9pjs
        subject_person_id: p_SP34iPxZY9sTX172wiUoyx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cz4BQgsickbVfDGrPHBAYX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VW8bVc7G7zHFTab0r4LXrI
          claim_id: c_sNP2rmf2PYCxPYGD6z9pjs
          source_id: s_jmg7jn6x5RR7Dmk8jjed1q
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1108：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_jmg7jn6x5RR7Dmk8jjed1q
            source_type: api_record
            title: 中国历代人物传记资料库：王瓘（CBDB 45855）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45855&o=json
            external_identifier: CBDB:45855
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.698Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_SP34iPxZY9sTX172wiUoyx
        status: active
        display_name: 王瓘
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王端

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王端 | accepted |
| bio.summary | 王端，宋人物。籍贯山東，身份为畫家、好學，曾任右班殿直。（中国历代人物传记资料库 CBDB 39130） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_56q5oQWe8juXsC1XW2nxj3 | 王瓘 | accepted |
| parents | p_SP34iPxZY9sTX172wiUoyx | 王瓘 | accepted |

## 外部来源

- [中国历代人物传记资料库：王端（CBDB 39130）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39130&o=json)
- [中国历代人物传记资料库：王瓘（CBDB 39133）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39133&o=json)
- [中国历代人物传记资料库：王瓘（CBDB 45855）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45855&o=json)
