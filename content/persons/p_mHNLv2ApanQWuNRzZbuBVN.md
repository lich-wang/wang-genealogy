---
schema: wang-person/v1
id: p_mHNLv2ApanQWuNRzZbuBVN
status: active
merged_into: null
display_name: 王晉康
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_F91QEs9dDAUX93y5UiFsxB
        subject_person_id: p_mHNLv2ApanQWuNRzZbuBVN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晉康
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PNoZ5PpWuooRqqyQHDhnNn
          claim_id: c_F91QEs9dDAUX93y5UiFsxB
          source_id: s_Bs15bvv8hmVNRb8vdyWowD
          stance: supports
          locator: CBDB:638451
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638451）
          source: &a1
            id: s_Bs15bvv8hmVNRb8vdyWowD
            source_type: api_record
            title: 中国历代人物传记资料库：王晉康（CBDB 638451）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638451&o=json
            external_identifier: CBDB:638451
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.687Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VC2envp4M1962sLbXDJa6D
        subject_person_id: p_mHNLv2ApanQWuNRzZbuBVN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晉康，清人物。籍贯滄州，入仕鄉貢舉人，曾任學正、知縣。（中国历代人物传记资料库 CBDB 638451）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_HYnjFSxjwt_14jL2h7IeRn
          claim_id: c_VC2envp4M1962sLbXDJa6D
          source_id: s_Bs15bvv8hmVNRb8vdyWowD
          stance: supports
          locator: CBDB:638451
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

# 王晉康

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王晉康 | accepted |
| bio.summary | 王晉康，清人物。籍贯滄州，入仕鄉貢舉人，曾任學正、知縣。（中国历代人物传记资料库 CBDB 638451） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王晉康（CBDB 638451）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638451&o=json)
