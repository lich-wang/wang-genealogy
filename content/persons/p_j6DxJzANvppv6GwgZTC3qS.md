---
schema: wang-person/v1
id: p_j6DxJzANvppv6GwgZTC3qS
status: active
merged_into: null
display_name: 王點
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_S63S2NhNuJ46c22msan6nc
        subject_person_id: p_j6DxJzANvppv6GwgZTC3qS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王點
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_19w4VGCvp9T74zkqj9Qkf9
          claim_id: c_S63S2NhNuJ46c22msan6nc
          source_id: s_641VbL3ZK87GRu1zkrkPRz
          stance: supports
          locator: CBDB:309654
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（309654）
          source: &a1
            id: s_641VbL3ZK87GRu1zkrkPRz
            source_type: api_record
            title: 中国历代人物传记资料库：王點（CBDB 309654）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309654&o=json
            external_identifier: CBDB:309654
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.824Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_X3pQLkLt6t2LN4raLoRKDQ
        subject_person_id: p_j6DxJzANvppv6GwgZTC3qS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王點，明人物。嘉靖二十六年進士，籍贯金壇，入仕監生。（中国历代人物传记资料库 CBDB 309654）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FGatYAitKmeBEmi7w58I-j
          claim_id: c_X3pQLkLt6t2LN4raLoRKDQ
          source_id: s_641VbL3ZK87GRu1zkrkPRz
          stance: supports
          locator: CBDB:309654
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

# 王點

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王點 | accepted |
| bio.summary | 王點，明人物。嘉靖二十六年進士，籍贯金壇，入仕監生。（中国历代人物传记资料库 CBDB 309654） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王點（CBDB 309654）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309654&o=json)
