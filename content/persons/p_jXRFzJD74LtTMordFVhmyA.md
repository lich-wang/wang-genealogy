---
schema: wang-person/v1
id: p_jXRFzJD74LtTMordFVhmyA
status: active
merged_into: null
display_name: 王槱林
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vw89ds81xbPeNget6KetCP
        subject_person_id: p_jXRFzJD74LtTMordFVhmyA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王槱林
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_o1xbSFzfBh8vJQasRA2gpr
          claim_id: c_vw89ds81xbPeNget6KetCP
          source_id: s_N2fbhKseL197gb9tEzgZbq
          stance: supports
          locator: CBDB:638823
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638823）
          source: &a1
            id: s_N2fbhKseL197gb9tEzgZbq
            source_type: api_record
            title: 中国历代人物传记资料库：王槱林（CBDB 638823）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638823&o=json
            external_identifier: CBDB:638823
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.757Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4V9mNLq9eSkJ1hcKf7v8DE
        subject_person_id: p_jXRFzJD74LtTMordFVhmyA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王槱林，清人物。籍贯太倉直隸州直轄地方，入仕貢生: 恩貢，曾任復設訓導。（中国历代人物传记资料库 CBDB 638823）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_VeZ-McDrfbU1jQU8GkLxWO
          claim_id: c_4V9mNLq9eSkJ1hcKf7v8DE
          source_id: s_N2fbhKseL197gb9tEzgZbq
          stance: supports
          locator: CBDB:638823
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

# 王槱林

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王槱林 | accepted |
| bio.summary | 王槱林，清人物。籍贯太倉直隸州直轄地方，入仕貢生: 恩貢，曾任復設訓導。（中国历代人物传记资料库 CBDB 638823） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王槱林（CBDB 638823）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638823&o=json)
