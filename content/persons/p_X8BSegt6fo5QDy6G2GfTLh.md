---
schema: wang-person/v1
id: p_X8BSegt6fo5QDy6G2GfTLh
status: active
merged_into: null
display_name: 王業澄
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4Zu72xxU6suGotQu148ZPy
        subject_person_id: p_X8BSegt6fo5QDy6G2GfTLh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王業澄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1na8r5yf1iYSecKhJYHM7Z
          claim_id: c_4Zu72xxU6suGotQu148ZPy
          source_id: s_nB9RjVpRRq5yqbJiHJe6w5
          stance: supports
          locator: CBDB:556674
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（556674）
          source: &a1
            id: s_nB9RjVpRRq5yqbJiHJe6w5
            source_type: api_record
            title: 中国历代人物传记资料库：王業澄（CBDB 556674）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556674&o=json
            external_identifier: CBDB:556674
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.656Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3cmiURipYQsPQyHhQajV5z
        subject_person_id: p_X8BSegt6fo5QDy6G2GfTLh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王業澄，清人物。籍贯山陰。（中国历代人物传记资料库 CBDB 556674）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_iGTBL0CrJjDBJtpG_BdWl4
          claim_id: c_3cmiURipYQsPQyHhQajV5z
          source_id: s_nB9RjVpRRq5yqbJiHJe6w5
          stance: supports
          locator: CBDB:556674
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

# 王業澄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王業澄 | accepted |
| bio.summary | 王業澄，清人物。籍贯山陰。（中国历代人物传记资料库 CBDB 556674） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王業澄（CBDB 556674）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556674&o=json)
