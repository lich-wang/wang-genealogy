---
schema: wang-person/v1
id: p_hQ4P2sZiQRoZEyxeAra4fa
status: active
merged_into: null
display_name: 王像曾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jqrKHHMVyu4BFefeN6b7QG
        subject_person_id: p_hQ4P2sZiQRoZEyxeAra4fa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王像曾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2uGqHrbdEqeBakjQ9EJetb
          claim_id: c_jqrKHHMVyu4BFefeN6b7QG
          source_id: s_i8F8AEzVMcL5RbLaGxEbmJ
          stance: supports
          locator: CBDB:636096
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636096）
          source: &a1
            id: s_i8F8AEzVMcL5RbLaGxEbmJ
            source_type: api_record
            title: 中国历代人物传记资料库：王像曾（CBDB 636096）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636096&o=json
            external_identifier: CBDB:636096
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.886Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bMMXLhB58WCdtJye3WUWuG
        subject_person_id: p_hQ4P2sZiQRoZEyxeAra4fa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王像曾，清人物。籍贯楚雄，入仕貢生: 拔貢，曾任教授、訓導、復設訓導。（中国历代人物传记资料库 CBDB 636096）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ebKNgx5speJHeBX3PrLSf-
          claim_id: c_bMMXLhB58WCdtJye3WUWuG
          source_id: s_i8F8AEzVMcL5RbLaGxEbmJ
          stance: supports
          locator: CBDB:636096
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

# 王像曾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王像曾 | accepted |
| bio.summary | 王像曾，清人物。籍贯楚雄，入仕貢生: 拔貢，曾任教授、訓導、復設訓導。（中国历代人物传记资料库 CBDB 636096） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王像曾（CBDB 636096）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636096&o=json)
