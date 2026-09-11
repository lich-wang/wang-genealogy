---
schema: wang-person/v1
id: p_yezJWHK25Yf5XQXbSoogzX
status: active
merged_into: null
display_name: 王官
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yJ1x12xGh77pFvBHk31DWG
        subject_person_id: p_yezJWHK25Yf5XQXbSoogzX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王官
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_h3htDrbwm5ibLegQEMoZ6V
          claim_id: c_yJ1x12xGh77pFvBHk31DWG
          source_id: s_4JRTfWWcFu8YdisupWHwCA
          stance: supports
          locator: CBDB:473409
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（473409）
          source: &a1
            id: s_4JRTfWWcFu8YdisupWHwCA
            source_type: api_record
            title: 中国历代人物传记资料库：王官（CBDB 473409）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=473409&o=json
            external_identifier: CBDB:473409
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.303Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_iRTgrmMAtK5MTHNyfBsuJz
        subject_person_id: p_yezJWHK25Yf5XQXbSoogzX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王官，明人物。入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 473409）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tcwyIrZ4SiBhHmUr4D3j8o
          claim_id: c_iRTgrmMAtK5MTHNyfBsuJz
          source_id: s_4JRTfWWcFu8YdisupWHwCA
          stance: supports
          locator: CBDB:473409
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

# 王官

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王官 | accepted |
| bio.summary | 王官，明人物。入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 473409） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王官（CBDB 473409）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=473409&o=json)
