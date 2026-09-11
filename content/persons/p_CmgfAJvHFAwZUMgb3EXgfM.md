---
schema: wang-person/v1
id: p_CmgfAJvHFAwZUMgb3EXgfM
status: active
merged_into: null
display_name: 王荃
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SUWPNXYjSFVfUmr8ky14is
        subject_person_id: p_CmgfAJvHFAwZUMgb3EXgfM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王荃
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WnhCKrfXGsTQj42wCop5s2
          claim_id: c_SUWPNXYjSFVfUmr8ky14is
          source_id: s_CJqpMPJ72xKurupR2C3e2p
          stance: supports
          locator: CBDB:222175
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（222175）
          source: &a1
            id: s_CJqpMPJ72xKurupR2C3e2p
            source_type: api_record
            title: 中国历代人物传记资料库：王荃（CBDB 222175）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222175&o=json
            external_identifier: CBDB:222175
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.366Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gajTCCFhQPFoauHv98bQ9Q
        subject_person_id: p_CmgfAJvHFAwZUMgb3EXgfM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王荃，明人物。萬曆十一年進士，籍贯慈溪。（中国历代人物传记资料库 CBDB 222175）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hPyv6Hk1LswY9oGYpYxLXn
          claim_id: c_gajTCCFhQPFoauHv98bQ9Q
          source_id: s_CJqpMPJ72xKurupR2C3e2p
          stance: supports
          locator: CBDB:222175
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

# 王荃

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王荃 | accepted |
| bio.summary | 王荃，明人物。萬曆十一年進士，籍贯慈溪。（中国历代人物传记资料库 CBDB 222175） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王荃（CBDB 222175）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222175&o=json)
