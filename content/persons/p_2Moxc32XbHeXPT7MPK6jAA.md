---
schema: wang-person/v1
id: p_2Moxc32XbHeXPT7MPK6jAA
status: active
merged_into: null
display_name: 王爽
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_muRGEnrXkzMPzhDPYRd4GK
        subject_person_id: p_2Moxc32XbHeXPT7MPK6jAA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王爽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FH5wtWsCBd2ub2S1oNdLy2
          claim_id: c_muRGEnrXkzMPzhDPYRd4GK
          source_id: s_yhAnRdkuCEJAMLMg1YCLmc
          stance: supports
          locator: CBDB:508854
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（508854）
          source: &a1
            id: s_yhAnRdkuCEJAMLMg1YCLmc
            source_type: api_record
            title: 中国历代人物传记资料库：王爽（CBDB 508854）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=508854&o=json
            external_identifier: CBDB:508854
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.123Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tMzKbSwb3Z83vBztj1MHmQ
        subject_person_id: p_2Moxc32XbHeXPT7MPK6jAA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王爽，明人物。入仕貢生: 納貢(例貢,增貢,捐貢)，曾任縣丞。（中国历代人物传记资料库 CBDB 508854）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_O8nfRfmNpMHJZTJpxgWrhs
          claim_id: c_tMzKbSwb3Z83vBztj1MHmQ
          source_id: s_yhAnRdkuCEJAMLMg1YCLmc
          stance: supports
          locator: CBDB:508854
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

# 王爽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王爽 | accepted |
| bio.summary | 王爽，明人物。入仕貢生: 納貢(例貢,增貢,捐貢)，曾任縣丞。（中国历代人物传记资料库 CBDB 508854） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王爽（CBDB 508854）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=508854&o=json)
