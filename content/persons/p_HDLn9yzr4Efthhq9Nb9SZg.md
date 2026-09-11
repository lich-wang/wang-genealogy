---
schema: wang-person/v1
id: p_HDLn9yzr4Efthhq9Nb9SZg
status: active
merged_into: null
display_name: 王元釗
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_a9B3nkGza45KaG4RNGsd3z
        subject_person_id: p_HDLn9yzr4Efthhq9Nb9SZg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元釗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_V6d5U1YHJ2LfN6Ny2bZJWz
          claim_id: c_a9B3nkGza45KaG4RNGsd3z
          source_id: s_5FnsQQQ6M2kMAtFS3XM9Be
          stance: supports
          locator: CBDB:636181
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636181）
          source: &a1
            id: s_5FnsQQQ6M2kMAtFS3XM9Be
            source_type: api_record
            title: 中国历代人物传记资料库：王元釗（CBDB 636181）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636181&o=json
            external_identifier: CBDB:636181
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.909Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pXZ5UH2fbtkxSa7hdnv6us
        subject_person_id: p_HDLn9yzr4Efthhq9Nb9SZg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王元釗，清人物。籍贯正定，入仕貢生: 拔貢，曾任訓導。（中国历代人物传记资料库 CBDB 636181）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hX44FQqtRSb-f5sGmOSGQE
          claim_id: c_pXZ5UH2fbtkxSa7hdnv6us
          source_id: s_5FnsQQQ6M2kMAtFS3XM9Be
          stance: supports
          locator: CBDB:636181
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

# 王元釗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元釗 | accepted |
| bio.summary | 王元釗，清人物。籍贯正定，入仕貢生: 拔貢，曾任訓導。（中国历代人物传记资料库 CBDB 636181） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王元釗（CBDB 636181）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636181&o=json)
