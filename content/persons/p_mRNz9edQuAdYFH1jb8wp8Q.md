---
schema: wang-person/v1
id: p_mRNz9edQuAdYFH1jb8wp8Q
status: active
merged_into: null
display_name: 王之瀚
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_P97FCrKLcL2pZnL9LCudAv
        subject_person_id: p_mRNz9edQuAdYFH1jb8wp8Q
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之瀚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Eg4HAZy1aJhLmodc8gr5nn
          claim_id: c_P97FCrKLcL2pZnL9LCudAv
          source_id: s_yzJX7izFSvoL1hnNVK9D1v
          stance: supports
          locator: CBDB:635799
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635799）
          source: &a1
            id: s_yzJX7izFSvoL1hnNVK9D1v
            source_type: api_record
            title: 中国历代人物传记资料库：王之瀚（CBDB 635799）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635799&o=json
            external_identifier: CBDB:635799
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.795Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Tde91YVPNzF153pLMHuL53
        subject_person_id: p_mRNz9edQuAdYFH1jb8wp8Q
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之瀚，清人物。籍贯長沙，入仕縣學附生，曾任復設訓導。（中国历代人物传记资料库 CBDB 635799）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_U4Z-a3Im3uXeSBbvgQPdUt
          claim_id: c_Tde91YVPNzF153pLMHuL53
          source_id: s_yzJX7izFSvoL1hnNVK9D1v
          stance: supports
          locator: CBDB:635799
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

# 王之瀚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之瀚 | accepted |
| bio.summary | 王之瀚，清人物。籍贯長沙，入仕縣學附生，曾任復設訓導。（中国历代人物传记资料库 CBDB 635799） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王之瀚（CBDB 635799）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635799&o=json)
