---
schema: wang-person/v1
id: p_Q8qSEvMo7Cuqc3hifCBJSh
status: active
merged_into: null
display_name: 王渭
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ahQGF4sYGEyVojhziCjZZE
        subject_person_id: p_Q8qSEvMo7Cuqc3hifCBJSh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王渭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EQGBjU677KKqcLApjH6Cc8
          claim_id: c_ahQGF4sYGEyVojhziCjZZE
          source_id: s_KUWFxKvVGf1BLCNTpb3U3L
          stance: supports
          locator: CBDB:1915
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1915）
          source: &a1
            id: s_KUWFxKvVGf1BLCNTpb3U3L
            source_type: api_record
            title: 中国历代人物传记资料库：王渭（CBDB 1915）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1915&o=json
            external_identifier: CBDB:1915
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.394Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yq6msRbeyL2MLNquDJ2SVN
        subject_person_id: p_Q8qSEvMo7Cuqc3hifCBJSh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王渭，宋人物。曾任三司都勾院、三司都磨勘司、鹽鐵憑由司。（中国历代人物传记资料库 CBDB 1915）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MgzhsGkAzIIamSP_eskn7h
          claim_id: c_yq6msRbeyL2MLNquDJ2SVN
          source_id: s_KUWFxKvVGf1BLCNTpb3U3L
          stance: supports
          locator: CBDB:1915
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

# 王渭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王渭 | accepted |
| bio.summary | 王渭，宋人物。曾任三司都勾院、三司都磨勘司、鹽鐵憑由司。（中国历代人物传记资料库 CBDB 1915） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王渭（CBDB 1915）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1915&o=json)
