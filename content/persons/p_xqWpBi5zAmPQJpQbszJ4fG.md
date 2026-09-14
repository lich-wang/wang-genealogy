---
schema: wang-person/v1
id: p_xqWpBi5zAmPQJpQbszJ4fG
status: active
merged_into: null
display_name: 王仰文
cbdb_id: 248134
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gBSAozpdRj2YoujyTNJEy3
        subject_person_id: p_xqWpBi5zAmPQJpQbszJ4fG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仰文，明人物。成化十一年進士，籍贯廬陵。（中国历代人物传记资料库 CBDB 248134）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_6i1RarxFz5mgVTbWhCx40c
          claim_id: c_gBSAozpdRj2YoujyTNJEy3
          source_id: s_3KHRfWTBHoZinK58Nkbi8k
          stance: supports
          locator: CBDB:248134
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_3KHRfWTBHoZinK58Nkbi8k
            source_type: api_record
            title: 中国历代人物传记资料库：王仰文（CBDB 248134）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248134&o=json
            external_identifier: CBDB:248134
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:59.761Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_bh1NLigkMf1NGiN5Gm1wDc
        subject_person_id: p_xqWpBi5zAmPQJpQbszJ4fG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仰文
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Qj8t3coVd2ELGkvq8pPcE4
          claim_id: c_bh1NLigkMf1NGiN5Gm1wDc
          source_id: s_3KHRfWTBHoZinK58Nkbi8k
          stance: supports
          locator: CBDB:248134
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2901-3000）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_TCO_GOJJeri0lRBZWEtp7z
        subject_person_id: p_hkkZy7J5ztQnL3t6fCHvcP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xqWpBi5zAmPQJpQbszJ4fG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Jp5CUVIk3wxLdnWb_-xKqT
          claim_id: c_TCO_GOJJeri0lRBZWEtp7z
          source_id: s_h_Nm-x1xKq27dM95LyMpVo
          stance: supports
          locator: CBDB：兄弟 王嶽（199663）之父／母 王崇志
          quotation: null
          interpretation_note: 由兄弟关系推断：王仰文 与 王嶽 为同胞（CBDB 记「弟」），王嶽 之父／母即 王仰文 之父／母。
          source:
            id: s_h_Nm-x1xKq27dM95LyMpVo
            source_type: api_record
            title: 中国历代人物传记资料库：王仰文（CBDB 248134）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248134&o=json
            external_identifier: CBDB:248134
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hkkZy7J5ztQnL3t6fCHvcP
        status: active
        display_name: 王崇志
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_-YdKCW--9T1O-tIr20R901
        subject_person_id: p_cQq1LyruU9xa7MkCKy9rQ3
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_xqWpBi5zAmPQJpQbszJ4fG
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5IM-cVagjInnrNxUYgymFJ
          claim_id: c_-YdKCW--9T1O-tIr20R901
          source_id: s_h_Nm-x1xKq27dM95LyMpVo
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 199663 王嶽）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_h_Nm-x1xKq27dM95LyMpVo
            source_type: api_record
            title: 中国历代人物传记资料库：王仰文（CBDB 248134）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248134&o=json
            external_identifier: CBDB:248134
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_cQq1LyruU9xa7MkCKy9rQ3
        status: active
        display_name: 王嶽
        merged_into_person_id: null
---

# 王仰文

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王仰文，明人物。成化十一年進士，籍贯廬陵。（中国历代人物传记资料库 CBDB 248134） | accepted |
| name.primary | 王仰文 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_hkkZy7J5ztQnL3t6fCHvcP | 王崇志 | accepted |
| other | p_cQq1LyruU9xa7MkCKy9rQ3 | 王嶽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王仰文（CBDB 248134）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248134&o=json)
