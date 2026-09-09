---
schema: wang-person/v1
id: p_u3ME38f3vUS5SkX4VmJ1Hg
status: active
merged_into: null
display_name: 王宗
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gcgqjsHwDvqPWkhvetFp72
        subject_person_id: p_u3ME38f3vUS5SkX4VmJ1Hg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jonRvCmdHi5DUtsJBR2ptR
          claim_id: c_gcgqjsHwDvqPWkhvetFp72
          source_id: s_yu5HsL9g5w5QjGNS6WxeRw
          stance: supports
          locator: CBDB:249893
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（249893）
          source: &a1
            id: s_yu5HsL9g5w5QjGNS6WxeRw
            source_type: api_record
            title: 中国历代人物传记资料库：王宗（CBDB 249893）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249893&o=json
            external_identifier: CBDB:249893
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.197Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8mjCvCYKsiZJv1Q1VU7FFh
        subject_person_id: p_u3ME38f3vUS5SkX4VmJ1Hg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nJbueQH1MvJAHW2sWHAQRX
          claim_id: c_8mjCvCYKsiZJv1Q1VU7FFh
          source_id: s_yu5HsL9g5w5QjGNS6WxeRw
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王宗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宗（CBDB 249893）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249893&o=json)
