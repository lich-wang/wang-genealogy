---
schema: wang-person/v1
id: p_AwTHuydM7sL7parZyqt7Q8
status: active
merged_into: null
display_name: 王植
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JkLMG3KfADFKyN39P7q2S7
        subject_person_id: p_AwTHuydM7sL7parZyqt7Q8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王植
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_khM1tfMCZFoN1ijpSzGjLD
          claim_id: c_JkLMG3KfADFKyN39P7q2S7
          source_id: s_9PGYmxdACVqodne8aSF9kF
          stance: supports
          locator: CBDB:26617
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（26617）
          source: &a1
            id: s_9PGYmxdACVqodne8aSF9kF
            source_type: api_record
            title: 中国历代人物传记资料库：王植（CBDB 26617）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26617&o=json
            external_identifier: CBDB:26617
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.943Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_u5gcneopb6NR83KA1uS8HA
        subject_person_id: p_AwTHuydM7sL7parZyqt7Q8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王植，宋人物。籍贯金壇，入仕恩蔭、蔭補，曾任通判。（中国历代人物传记资料库 CBDB 26617）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_pKeHTICHH-uaCrqfg7g7V9
          claim_id: c_u5gcneopb6NR83KA1uS8HA
          source_id: s_9PGYmxdACVqodne8aSF9kF
          stance: supports
          locator: CBDB:26617
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_mcPkRdr9X054U_eJQAKnkz
        subject_person_id: p_7ZkuLBZx4sM3DaTb2XEViR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AwTHuydM7sL7parZyqt7Q8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6UxRsJF255ZzhTjUi2mixI
          claim_id: c_mcPkRdr9X054U_eJQAKnkz
          source_id: s_4wBHe44bd6siK9D6AUEfUk
          stance: supports
          locator: 宋人傳記資料索引(電子版)，984：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_4wBHe44bd6siK9D6AUEfUk
            source_type: api_record
            title: 中国历代人物传记资料库：王渙之（CBDB 26612）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26612&o=json
            external_identifier: CBDB:26612
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.941Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7ZkuLBZx4sM3DaTb2XEViR
        status: active
        display_name: 王渙之
        merged_into_person_id: null
  children:
    - claim:
        id: c_ubGyWDBWX16JLCMkSKacm3
        subject_person_id: p_AwTHuydM7sL7parZyqt7Q8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Jag2m2Y8Aiw9vk8e8GxUWB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rpyrgrdt1CIegWFHdUqGPK
          claim_id: c_ubGyWDBWX16JLCMkSKacm3
          source_id: s_2TkSB7YRZd3A1Cb9geVgCJ
          stance: supports
          locator: CBDB 双向互证（父 王植 ⇄ 子 王烜）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_2TkSB7YRZd3A1Cb9geVgCJ
            source_type: api_record
            title: 中国历代人物传记资料库：王烜（CBDB 26618）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26618&o=json
            external_identifier: CBDB:26618
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.943Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Jag2m2Y8Aiw9vk8e8GxUWB
        status: active
        display_name: 王烜
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王植

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王植 | accepted |
| bio.summary | 王植，宋人物。籍贯金壇，入仕恩蔭、蔭補，曾任通判。（中国历代人物传记资料库 CBDB 26617） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_7ZkuLBZx4sM3DaTb2XEViR | 王渙之 | accepted |
| children | p_Jag2m2Y8Aiw9vk8e8GxUWB | 王烜 | accepted |

## 外部来源

- [中国历代人物传记资料库：王渙之（CBDB 26612）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26612&o=json)
- [中国历代人物传记资料库：王烜（CBDB 26618）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26618&o=json)
- [中国历代人物传记资料库：王植（CBDB 26617）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26617&o=json)
