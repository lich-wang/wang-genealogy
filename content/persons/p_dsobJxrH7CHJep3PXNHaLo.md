---
schema: wang-person/v1
id: p_dsobJxrH7CHJep3PXNHaLo
status: active
merged_into: null
display_name: 王者佐
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8onJ9N4Q9JNP5dzRegQrEw
        subject_person_id: p_dsobJxrH7CHJep3PXNHaLo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王者佐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CfgWsssnsFLYTLTwV6G9XK
          claim_id: c_8onJ9N4Q9JNP5dzRegQrEw
          source_id: s_CutASrtcixrt7Uk2fx6DGY
          stance: supports
          locator: CBDB:517448
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（517448）
          source: &a1
            id: s_CutASrtcixrt7Uk2fx6DGY
            source_type: api_record
            title: 中国历代人物传记资料库：王者佐（CBDB 517448）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=517448&o=json
            external_identifier: CBDB:517448
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.312Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ykayAu7UFx1CraRJwNW3uM
        subject_person_id: p_dsobJxrH7CHJep3PXNHaLo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UyHWKMRL6DzePCT8zDCWVW
          claim_id: c_ykayAu7UFx1CraRJwNW3uM
          source_id: s_CutASrtcixrt7Uk2fx6DGY
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_2i3P5O9OCuQwEYKbiwSF9A
        subject_person_id: p_dsobJxrH7CHJep3PXNHaLo
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_os3EARVo1edJtSU4wyQ9C6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_e39Aroto9lAVj9CfTDoTBM
          claim_id: c_2i3P5O9OCuQwEYKbiwSF9A
          source_id: s_CutASrtcixrt7Uk2fx6DGY
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），1896：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_os3EARVo1edJtSU4wyQ9C6
        status: active
        display_name: 王錫朋
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王者佐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王者佐 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_os3EARVo1edJtSU4wyQ9C6 | 王錫朋 | accepted |

## 外部来源

- [中国历代人物传记资料库：王者佐（CBDB 517448）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=517448&o=json)
