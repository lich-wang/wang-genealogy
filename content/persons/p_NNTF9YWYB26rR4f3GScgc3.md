---
schema: wang-person/v1
id: p_NNTF9YWYB26rR4f3GScgc3
status: active
merged_into: null
display_name: 王象乾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_z2iRiZWdfTU7R8uqhdDA93
        subject_person_id: p_NNTF9YWYB26rR4f3GScgc3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王象乾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ByMcTW3NPLmydswMeL39mv
          claim_id: c_z2iRiZWdfTU7R8uqhdDA93
          source_id: s_3w21ZBSPxoroG25yAPys1d
          stance: supports
          locator: CBDB:330752
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（330752）
          source: &a1
            id: s_3w21ZBSPxoroG25yAPys1d
            source_type: api_record
            title: 中国历代人物传记资料库：王象乾（CBDB 330752）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330752&o=json
            external_identifier: CBDB:330752
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.356Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HtVUpEQTyzynDpLp93yjrH
        subject_person_id: p_NNTF9YWYB26rR4f3GScgc3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王象乾，明人物。嘉靖四十四年進士，籍贯新城。（中国历代人物传记资料库 CBDB 330752）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_m_krAwORH5Puw0xNxxhZQa
          claim_id: c_HtVUpEQTyzynDpLp93yjrH
          source_id: s_3w21ZBSPxoroG25yAPys1d
          stance: supports
          locator: CBDB:330752
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王象乾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王象乾 | accepted |
| bio.summary | 王象乾，明人物。嘉靖四十四年進士，籍贯新城。（中国历代人物传记资料库 CBDB 330752） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王象乾（CBDB 330752）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330752&o=json)
