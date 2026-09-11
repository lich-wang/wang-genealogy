---
schema: wang-person/v1
id: p_N1LKScv39vZEjJfiNsp7Wi
status: active
merged_into: null
display_name: 王福
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NvgBrGqtywyEarWJ1N3RQN
        subject_person_id: p_N1LKScv39vZEjJfiNsp7Wi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王福
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jVqE3P2ryDo5cvZMDkcGex
          claim_id: c_NvgBrGqtywyEarWJ1N3RQN
          source_id: s_ff42akNKAegcfqW1E7j7Wg
          stance: supports
          locator: CBDB:289991
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（289991）
          source: &a1
            id: s_ff42akNKAegcfqW1E7j7Wg
            source_type: api_record
            title: 中国历代人物传记资料库：王福（CBDB 289991）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=289991&o=json
            external_identifier: CBDB:289991
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.311Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HJn5MiEZPCLoyBqu5rB4J9
        subject_person_id: p_N1LKScv39vZEjJfiNsp7Wi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王福，明人物。嘉靖八年進士，曾任壽官。（中国历代人物传记资料库 CBDB 289991）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CWkqRZ5jkoi3_RPmKWPiD1
          claim_id: c_HJn5MiEZPCLoyBqu5rB4J9
          source_id: s_ff42akNKAegcfqW1E7j7Wg
          stance: supports
          locator: CBDB:289991
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
  descendants:
    - claim:
        id: c_lF2Y5d6ZyTEd4vQLNT4P-s
        subject_person_id: p_N1LKScv39vZEjJfiNsp7Wi
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_5Nsm7LtaHH2TfQdw6zv4Pu
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_g5MpmaobqA827sRsjGbMDz
          claim_id: c_lF2Y5d6ZyTEd4vQLNT4P-s
          source_id: s_4P9sB4w6wzqeoekXVGxMGt
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第三甲第一百五十七名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_4P9sB4w6wzqeoekXVGxMGt
            source_type: api_record
            title: 中国历代人物传记资料库：王崇（CBDB 126684）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126684&o=json
            external_identifier: CBDB:126684
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.121Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5Nsm7LtaHH2TfQdw6zv4Pu
        status: active
        display_name: 王崇
        merged_into_person_id: null
  other: []
---

# 王福

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王福 | accepted |
| bio.summary | 王福，明人物。嘉靖八年進士，曾任壽官。（中国历代人物传记资料库 CBDB 289991） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_5Nsm7LtaHH2TfQdw6zv4Pu | 王崇 | accepted |

## 外部来源

- [中国历代人物传记资料库：王崇（CBDB 126684）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126684&o=json)
- [中国历代人物传记资料库：王福（CBDB 289991）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=289991&o=json)
