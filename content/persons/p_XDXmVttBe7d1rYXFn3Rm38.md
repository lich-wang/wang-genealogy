---
schema: wang-person/v1
id: p_XDXmVttBe7d1rYXFn3Rm38
status: active
merged_into: null
display_name: 王鴻遇
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iTHQAuBnGKQAQ52PDDGEkZ
        subject_person_id: p_XDXmVttBe7d1rYXFn3Rm38
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鴻遇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wyVEPGaEP31FBwx5Mhm6HD
          claim_id: c_iTHQAuBnGKQAQ52PDDGEkZ
          source_id: s_APNvpvb5A6R1sxcFqEHyy9
          stance: supports
          locator: CBDB:641001
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（641001）
          source: &a1
            id: s_APNvpvb5A6R1sxcFqEHyy9
            source_type: api_record
            title: 中国历代人物传记资料库：王鴻遇（CBDB 641001）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=641001&o=json
            external_identifier: CBDB:641001
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.271Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_E6buMnAiXDG7EBSHYM4b5Z
        subject_person_id: p_XDXmVttBe7d1rYXFn3Rm38
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王鴻遇，清人物。籍贯貴陽府，入仕學校: 生員(庠生)，曾任復設教諭。（中国历代人物传记资料库 CBDB 641001）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4B53AZhAOO_ntJZxrilaim
          claim_id: c_E6buMnAiXDG7EBSHYM4b5Z
          source_id: s_APNvpvb5A6R1sxcFqEHyy9
          stance: supports
          locator: CBDB:641001
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

# 王鴻遇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鴻遇 | accepted |
| bio.summary | 王鴻遇，清人物。籍贯貴陽府，入仕學校: 生員(庠生)，曾任復設教諭。（中国历代人物传记资料库 CBDB 641001） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鴻遇（CBDB 641001）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=641001&o=json)
