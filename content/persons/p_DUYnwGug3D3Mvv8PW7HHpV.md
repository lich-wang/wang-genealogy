---
schema: wang-person/v1
id: p_DUYnwGug3D3Mvv8PW7HHpV
status: active
merged_into: null
display_name: 王鉞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YZy9C91dBGEX7VSyt4Qrca
        subject_person_id: p_DUYnwGug3D3Mvv8PW7HHpV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鉞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_iX8WHAoJr3nSeXaijmwUoh
          claim_id: c_YZy9C91dBGEX7VSyt4Qrca
          source_id: s_pTEfeHS965KCVPtfifQMTE
          stance: supports
          locator: CBDB:576165
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（576165）
          source: &a1
            id: s_pTEfeHS965KCVPtfifQMTE
            source_type: api_record
            title: 中国历代人物传记资料库：王鉞（CBDB 576165）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=576165&o=json
            external_identifier: CBDB:576165
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.954Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pi4tF3cGiHXv4JTBRr4jw9
        subject_person_id: p_DUYnwGug3D3Mvv8PW7HHpV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鉞，清人物。籍贯保德直隸州直轄地方，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 576165）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JuRfYGYAmeAuHxKXsLkWhh
          claim_id: c_pi4tF3cGiHXv4JTBRr4jw9
          source_id: s_pTEfeHS965KCVPtfifQMTE
          stance: supports
          locator: CBDB:576165
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

# 王鉞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鉞 | accepted |
| bio.summary | 王鉞，清人物。籍贯保德直隸州直轄地方，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 576165） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鉞（CBDB 576165）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=576165&o=json)
