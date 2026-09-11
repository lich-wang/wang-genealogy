---
schema: wang-person/v1
id: p_1KcRUCdoMYjc4pH69zF2eK
status: active
merged_into: null
display_name: 王志良
cbdb_id: 156968
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nvBDeus7uBU6iUjjiAu4jj
        subject_person_id: p_1KcRUCdoMYjc4pH69zF2eK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志良，唐人物。中国历代人物传记资料库（CBDB）以人物编号 156968 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_nJEa0feHUJhAUbK6BVtnpX
          claim_id: c_nvBDeus7uBU6iUjjiAu4jj
          source_id: s_L8H6M7m77r7M1U3asdJoXE
          stance: supports
          locator: CBDB:156968
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_L8H6M7m77r7M1U3asdJoXE
            source_type: api_record
            title: 中国历代人物传记资料库：王志良（CBDB 156968）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=156968&o=json
            external_identifier: CBDB:156968
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.122Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_1Q52Y42WRngfRgC3zL1Jvd
        subject_person_id: p_1KcRUCdoMYjc4pH69zF2eK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志良
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_JpHTeGzGuL23LEyDNpHQUP
          claim_id: c_1Q52Y42WRngfRgC3zL1Jvd
          source_id: s_L8H6M7m77r7M1U3asdJoXE
          stance: supports
          locator: CBDB:156968
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2201-2300）｜历史性依据：CBDB 朝代 = 唐
          source:
            id: s_L8H6M7m77r7M1U3asdJoXE
            source_type: api_record
            title: 中国历代人物传记资料库：王志良（CBDB 156968）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=156968&o=json
            external_identifier: CBDB:156968
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.122Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_XvjfYgtirIGJm51-ahoMFz
        subject_person_id: p_ppJ3rzQE6ZJSvkPr17M7h6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1KcRUCdoMYjc4pH69zF2eK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IULv2DUdBHhaUMwrVVqk18
          claim_id: c_XvjfYgtirIGJm51-ahoMFz
          source_id: s_5SpNxx9QwjYJyYJG8EEdty
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_5SpNxx9QwjYJyYJG8EEdty
            source_type: api_record
            title: 中国历代人物传记资料库：王協（CBDB 156967）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=156967&o=json
            external_identifier: CBDB:156967
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.899Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ppJ3rzQE6ZJSvkPr17M7h6
        status: active
        display_name: 王協
        merged_into_person_id: null
  children:
    - claim:
        id: c_tZnCGHpHYmjP3OhqgcUo-k
        subject_person_id: p_1KcRUCdoMYjc4pH69zF2eK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_iDUECj6gM8iHB9C7LBhA5L
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LxJfB1IR1OCrIM7OONf1O1
          claim_id: c_tZnCGHpHYmjP3OhqgcUo-k
          source_id: s_aHH3SHoo6f7N4dAsZe2Xjm
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_aHH3SHoo6f7N4dAsZe2Xjm
            source_type: api_record
            title: 中国历代人物传记资料库：王少恆（CBDB 189936）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=189936&o=json
            external_identifier: CBDB:189936
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.310Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_iDUECj6gM8iHB9C7LBhA5L
        status: active
        display_name: 王少恆
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王志良

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王志良，唐人物。中国历代人物传记资料库（CBDB）以人物编号 156968 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王志良 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ppJ3rzQE6ZJSvkPr17M7h6 | 王協 | accepted |
| children | p_iDUECj6gM8iHB9C7LBhA5L | 王少恆 | accepted |

## 外部来源

- [中国历代人物传记资料库：王少恆（CBDB 189936）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=189936&o=json)
- [中国历代人物传记资料库：王協（CBDB 156967）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=156967&o=json)
- [中国历代人物传记资料库：王志良（CBDB 156968）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=156968&o=json)
