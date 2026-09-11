---
schema: wang-person/v1
id: p_7Q9L6rrdhr32xAQNs6U7QU
status: active
merged_into: null
display_name: 王諭
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bPB68q9Qde76ZAjrv4kwaH
        subject_person_id: p_7Q9L6rrdhr32xAQNs6U7QU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王諭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qYNNjytfUyEgKfkc2RZJQc
          claim_id: c_bPB68q9Qde76ZAjrv4kwaH
          source_id: s_UobdGMd7ox6AJVMXS8rgD5
          stance: supports
          locator: CBDB:454555
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（454555）
          source: &a1
            id: s_UobdGMd7ox6AJVMXS8rgD5
            source_type: api_record
            title: 中国历代人物传记资料库：王諭（CBDB 454555）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=454555&o=json
            external_identifier: CBDB:454555
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.461Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RtxsHfyJa6q5TLePm8Eywr
        subject_person_id: p_7Q9L6rrdhr32xAQNs6U7QU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王諭，清人物。入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任教諭。（中国历代人物传记资料库 CBDB 454555）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_uaCgC2liEfea6XuR3lpU49
          claim_id: c_RtxsHfyJa6q5TLePm8Eywr
          source_id: s_UobdGMd7ox6AJVMXS8rgD5
          stance: supports
          locator: CBDB:454555
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

# 王諭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王諭 | accepted |
| bio.summary | 王諭，清人物。入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任教諭。（中国历代人物传记资料库 CBDB 454555） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王諭（CBDB 454555）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=454555&o=json)
