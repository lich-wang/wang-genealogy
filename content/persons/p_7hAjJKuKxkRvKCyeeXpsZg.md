---
schema: wang-person/v1
id: p_7hAjJKuKxkRvKCyeeXpsZg
status: active
merged_into: null
display_name: 伍氏
revision: 1
cbdb_id: 273650
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pFxDofpKNGBP_8UsdwGZOV
        subject_person_id: p_7hAjJKuKxkRvKCyeeXpsZg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 伍氏，明人物。弘治十八年進士。（中国历代人物传记资料库 CBDB 273650）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_V5YUhBekDWTfOqLwRuzllO
          claim_id: c_pFxDofpKNGBP_8UsdwGZOV
          source_id: s_Zjs-k7TH5CGH3hM4sZcwsz
          stance: supports
          locator: CBDB:273650
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Zjs-k7TH5CGH3hM4sZcwsz
            source_type: api_record
            title: 中国历代人物传记资料库：伍氏(王良佐妻)（CBDB 273650）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273650&o=json
            external_identifier: CBDB:273650
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_nFDe-k1B3LRJWXZgMTrz--
        subject_person_id: p_7hAjJKuKxkRvKCyeeXpsZg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 伍氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_N1o12upNMLotIMG4nwuWiN
          claim_id: c_nFDe-k1B3LRJWXZgMTrz--
          source_id: s_Zjs-k7TH5CGH3hM4sZcwsz
          stance: supports
          locator: CBDB:273650
          quotation: null
          interpretation_note: CBDB 明确记录的王良佐配偶
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_kXZTfTVNwWgZ4Tia8nE9ed
        subject_person_id: p_d6n2jnjPLQ88RNa223JnPk
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_7hAjJKuKxkRvKCyeeXpsZg
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_M4hE0Ysrh6LDuL8gSQRc0o
          claim_id: c_kXZTfTVNwWgZ4Tia8nE9ed
          source_id: s_Zjs-k7TH5CGH3hM4sZcwsz
          stance: supports
          locator: 弘治十八年進士登科錄:一卷，第三甲第二名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_d6n2jnjPLQ88RNa223JnPk
        status: active
        display_name: 王良佐
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 伍氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 伍氏，明人物。弘治十八年進士。（中国历代人物传记资料库 CBDB 273650） | accepted |
| name.primary | 伍氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_d6n2jnjPLQ88RNa223JnPk | 王良佐 | accepted |

## 外部来源

- [中国历代人物传记资料库：伍氏(王良佐妻)（CBDB 273650）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273650&o=json)
