---
schema: wang-person/v1
id: p_WHLL4q7E9HGsb1bAU1AL54
status: active
merged_into: null
display_name: 王啟曾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_f6Nky9Gq15RS4jKCYerDU1
        subject_person_id: p_WHLL4q7E9HGsb1bAU1AL54
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王啟曾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yQWgkq56MzxKb921L8oUUb
          claim_id: c_f6Nky9Gq15RS4jKCYerDU1
          source_id: s_uSKrmkCN9j1vJnj7V1ZwV9
          stance: supports
          locator: CBDB:342884
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342884）
          source: &a1
            id: s_uSKrmkCN9j1vJnj7V1ZwV9
            source_type: api_record
            title: 中国历代人物传记资料库：王啟曾（CBDB 342884）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342884&o=json
            external_identifier: CBDB:342884
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.111Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eMUNB4AaH342nBAck7DGd7
        subject_person_id: p_WHLL4q7E9HGsb1bAU1AL54
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王啟曾，清人物。明清進士進士，籍贯蓬萊，入仕進士。（中国历代人物传记资料库 CBDB 342884）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Zhx3RMDNQ5WKzftsz8zJu5
          claim_id: c_eMUNB4AaH342nBAck7DGd7
          source_id: s_uSKrmkCN9j1vJnj7V1ZwV9
          stance: supports
          locator: CBDB:342884
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

# 王啟曾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王啟曾 | accepted |
| bio.summary | 王啟曾，清人物。明清進士進士，籍贯蓬萊，入仕進士。（中国历代人物传记资料库 CBDB 342884） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王啟曾（CBDB 342884）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342884&o=json)
