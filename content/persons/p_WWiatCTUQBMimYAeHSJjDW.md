---
schema: wang-person/v1
id: p_WWiatCTUQBMimYAeHSJjDW
status: active
merged_into: null
display_name: 王纯礼
cbdb_id: 264936
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vEUFKgGi4K643aeTt7W5Lt
        subject_person_id: p_WWiatCTUQBMimYAeHSJjDW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王纯礼
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ybghncq2CkegSbSuRn1KEG
          claim_id: c_vEUFKgGi4K643aeTt7W5Lt
          source_id: s_eVYVZpC9SpRQ4QkjAsCUsV
          stance: supports
          locator: Q45583309
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
            id: s_eVYVZpC9SpRQ4QkjAsCUsV
            source_type: api_record
            title: 维基数据：王纯礼（Q45583309）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45583309
            external_identifier: Q45583309
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_T4sXiDC8LhhFD5Bifb3YrV
          claim_id: c_vEUFKgGi4K643aeTt7W5Lt
          source_id: s_jGSUx8W4tkzM5Vw59N5KbY
          stance: supports
          locator: CBDB:264936
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a2
            id: s_jGSUx8W4tkzM5Vw59N5KbY
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王純禮（264936）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264936&o=json
            external_identifier: CBDB:264936
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_x18KPTXeAwLrkNv5nGD9G7
        subject_person_id: p_WWiatCTUQBMimYAeHSJjDW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王纯礼，明人物。弘治六年進士。（中国历代人物传记资料库 CBDB 264936）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZU9gJYtPUAv6Uz35jNhAMZ
          claim_id: c_x18KPTXeAwLrkNv5nGD9G7
          source_id: s_eVYVZpC9SpRQ4QkjAsCUsV
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 维基数据条目描述
          source: *a1
        - id: cs_-Cjt2W-BMDz8-A60D_3BXq
          claim_id: c_x18KPTXeAwLrkNv5nGD9G7
          source_id: s_jGSUx8W4tkzM5Vw59N5KbY
          stance: supports
          locator: CBDB:264936
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a2
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_61FtbjnoAYgrAukFJaQrkF
        subject_person_id: p_WWiatCTUQBMimYAeHSJjDW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_YUKAdQiXr1DTx2KFsrYLgt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_11dNA1X79nByMTyHeicYsq
          claim_id: c_61FtbjnoAYgrAukFJaQrkF
          source_id: s_eVYVZpC9SpRQ4QkjAsCUsV
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_X7qVLU1gJNePnTdS7vK2Gv
          claim_id: c_61FtbjnoAYgrAukFJaQrkF
          source_id: s_B552dSZzBGwMMCA9WPbwQi
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_B552dSZzBGwMMCA9WPbwQi
            source_type: api_record
            title: 维基数据：王琛（Q45583436）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45583436
            external_identifier: Q45583436
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:19.152Z
            metadata_json: null
      object_person:
        id: p_YUKAdQiXr1DTx2KFsrYLgt
        status: active
        display_name: 王琛
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_40pBM4nXKvY-Fjqkhk4HVQ
        subject_person_id: p_WWiatCTUQBMimYAeHSJjDW
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_9esUYZvNqsWNd3UXAh8qx5
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1WvENtP5XcizzwMw80Nn5y
          claim_id: c_40pBM4nXKvY-Fjqkhk4HVQ
          source_id: s_8nUwjmnF5xTmqZCNqzBRAK
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第二十四名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_8nUwjmnF5xTmqZCNqzBRAK
            source_type: api_record
            title: 中国历代人物传记资料库：王縝（CBDB 68275）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68275&o=json
            external_identifier: CBDB:68275
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.064Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_9esUYZvNqsWNd3UXAh8qx5
        status: active
        display_name: 王縝
        merged_into_person_id: null
  other: []
---

# 王纯礼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王纯礼 | accepted |
| bio.summary | 王纯礼，明人物。弘治六年進士。（中国历代人物传记资料库 CBDB 264936） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_YUKAdQiXr1DTx2KFsrYLgt | 王琛 | accepted |
| descendants | p_9esUYZvNqsWNd3UXAh8qx5 | 王縝 | accepted |

## 外部来源

- [维基数据：王琛（Q45583436）](https://www.wikidata.org/wiki/Q45583436)
- [维基数据：王纯礼（Q45583309）](https://www.wikidata.org/wiki/Q45583309)
- [中国历代人物传记资料库：王縝（CBDB 68275）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68275&o=json)
- [CBDB 中国历代人物传记资料库：王純禮（264936）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264936&o=json)
