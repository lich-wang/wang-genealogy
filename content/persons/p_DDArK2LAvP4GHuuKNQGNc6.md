---
schema: wang-person/v1
id: p_DDArK2LAvP4GHuuKNQGNc6
status: active
merged_into: null
display_name: 王昉夫
cbdb_id: 158499
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YRpkLw7LX52Xy54h2Mdiu4
        subject_person_id: p_DDArK2LAvP4GHuuKNQGNc6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昉夫，唐人物。籍贯諸暨。（中国历代人物传记资料库 CBDB 158499）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_vszzm57nrbaOmA6ErBqB9H
          claim_id: c_YRpkLw7LX52Xy54h2Mdiu4
          source_id: s_S8MkVgTvu1gJ4vd6v9f2vk
          stance: supports
          locator: CBDB:158499
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_S8MkVgTvu1gJ4vd6v9f2vk
            source_type: api_record
            title: 中国历代人物传记资料库：王昉夫（CBDB 158499）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158499&o=json
            external_identifier: CBDB:158499
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.122Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_gVZBwcVRQHGeR1mGCoN3a3
        subject_person_id: p_DDArK2LAvP4GHuuKNQGNc6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昉夫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_qyykpWGQKTJRXAHs7VR9ow
          claim_id: c_gVZBwcVRQHGeR1mGCoN3a3
          source_id: s_S8MkVgTvu1gJ4vd6v9f2vk
          stance: supports
          locator: CBDB:158499
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2201-2300）｜历史性依据：CBDB 朝代 = 唐
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_BTr8FH8wBrA_Gjfocjy7KS
        subject_person_id: p_vZnDcXFqAU9qkQZwwP1LXd
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DDArK2LAvP4GHuuKNQGNc6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2VBri-KfWFVfSwG4m9aPHJ
          claim_id: c_BTr8FH8wBrA_Gjfocjy7KS
          source_id: s_S8MkVgTvu1gJ4vd6v9f2vk
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaicheng 54：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_S8MkVgTvu1gJ4vd6v9f2vk
            source_type: api_record
            title: 中国历代人物传记资料库：王昉夫（CBDB 158499）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158499&o=json
            external_identifier: CBDB:158499
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.122Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_vZnDcXFqAU9qkQZwwP1LXd
        status: active
        display_name: 王鍊
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王昉夫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王昉夫，唐人物。籍贯諸暨。（中国历代人物传记资料库 CBDB 158499） | accepted |
| name.primary | 王昉夫 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_vZnDcXFqAU9qkQZwwP1LXd | 王鍊 | accepted |

## 外部来源

- [中国历代人物传记资料库：王昉夫（CBDB 158499）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158499&o=json)
