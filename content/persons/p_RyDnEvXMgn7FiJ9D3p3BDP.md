---
schema: wang-person/v1
id: p_RyDnEvXMgn7FiJ9D3p3BDP
status: active
merged_into: null
display_name: 王雲漢
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7BUtJDCGk8myKQYuAkn1Y2
        subject_person_id: p_RyDnEvXMgn7FiJ9D3p3BDP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雲漢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pJEixBB2hCmeBzzhgYb85v
          claim_id: c_7BUtJDCGk8myKQYuAkn1Y2
          source_id: s_F7qBaruBKajKqB8cFHeSNx
          stance: supports
          locator: CBDB:640812
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640812）
          source: &a1
            id: s_F7qBaruBKajKqB8cFHeSNx
            source_type: api_record
            title: 中国历代人物传记资料库：王雲漢（CBDB 640812）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640812&o=json
            external_identifier: CBDB:640812
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.203Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1yWRX8iNG8BUGFBL9YkXSX
        subject_person_id: p_RyDnEvXMgn7FiJ9D3p3BDP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雲漢，清人物。籍贯濟南府，入仕鄉貢舉人，曾任復設教諭。（中国历代人物传记资料库 CBDB 640812）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_sr1J2NYHswDpm9788oYO2i
          claim_id: c_1yWRX8iNG8BUGFBL9YkXSX
          source_id: s_F7qBaruBKajKqB8cFHeSNx
          stance: supports
          locator: CBDB:640812
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

# 王雲漢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王雲漢 | accepted |
| bio.summary | 王雲漢，清人物。籍贯濟南府，入仕鄉貢舉人，曾任復設教諭。（中国历代人物传记资料库 CBDB 640812） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王雲漢（CBDB 640812）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640812&o=json)
