---
schema: wang-person/v1
id: p_an8AZhFejWmrpm1FYeSJN6
status: active
merged_into: null
display_name: 王陽
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3FSfoYf18RdA8tQMpz7r8o
        subject_person_id: p_an8AZhFejWmrpm1FYeSJN6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王陽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_p25iu6f83GXyRjNCKLeQYB
          claim_id: c_3FSfoYf18RdA8tQMpz7r8o
          source_id: s_VkMGvqKc4icBfYnNMALQrH
          stance: supports
          locator: CBDB:334257
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（334257）
          source: &a1
            id: s_VkMGvqKc4icBfYnNMALQrH
            source_type: api_record
            title: 中国历代人物传记资料库：王陽（CBDB 334257）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334257&o=json
            external_identifier: CBDB:334257
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.439Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VLwmZagLiHYsiA4h2JRSDE
        subject_person_id: p_an8AZhFejWmrpm1FYeSJN6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王陽，明人物。隆慶二年進士，籍贯鄒平。（中国历代人物传记资料库 CBDB 334257）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_wrAfYg_Ztk50Vqp_uo_pB-
          claim_id: c_VLwmZagLiHYsiA4h2JRSDE
          source_id: s_VkMGvqKc4icBfYnNMALQrH
          stance: supports
          locator: CBDB:334257
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_MqPr6xAxchbMvfj3XYJXHL
        subject_person_id: p_an8AZhFejWmrpm1FYeSJN6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2WkB5UHe7A5kLMMt82Na3L
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Q3tJXQwpRnqIbTO_DRNiEs
          claim_id: c_MqPr6xAxchbMvfj3XYJXHL
          source_id: s_uMbs1JEvz86ocgPbcdeRN4
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第二甲第六十四名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_uMbs1JEvz86ocgPbcdeRN4
            source_type: api_record
            title: 中国历代人物传记资料库：王之士（CBDB 126462）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126462&o=json
            external_identifier: CBDB:126462
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.972Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2WkB5UHe7A5kLMMt82Na3L
        status: active
        display_name: 王之士
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王陽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王陽 | accepted |
| bio.summary | 王陽，明人物。隆慶二年進士，籍贯鄒平。（中国历代人物传记资料库 CBDB 334257） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_2WkB5UHe7A5kLMMt82Na3L | 王之士 | accepted |

## 外部来源

- [中国历代人物传记资料库：王陽（CBDB 334257）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334257&o=json)
- [中国历代人物传记资料库：王之士（CBDB 126462）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126462&o=json)
