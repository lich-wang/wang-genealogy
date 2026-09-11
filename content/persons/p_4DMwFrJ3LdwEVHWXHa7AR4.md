---
schema: wang-person/v1
id: p_4DMwFrJ3LdwEVHWXHa7AR4
status: active
merged_into: null
display_name: 王珪
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3g9kVDzZHVik6MKArHCp79
        subject_person_id: p_4DMwFrJ3LdwEVHWXHa7AR4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Be3k7pmMAQdtNGk3QJX1MK
          claim_id: c_3g9kVDzZHVik6MKArHCp79
          source_id: s_nV4MaUuWGdefQd96RaG1Wf
          stance: supports
          locator: CBDB:38294
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38294）
          source: &a1
            id: s_nV4MaUuWGdefQd96RaG1Wf
            source_type: api_record
            title: 中国历代人物传记资料库：王珪（CBDB 38294）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38294&o=json
            external_identifier: CBDB:38294
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.424Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CJeWLBT8rP65MoZ4T5doq5
        subject_person_id: p_4DMwFrJ3LdwEVHWXHa7AR4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珪，宋人物。籍贯開封，身份为精於某種兵器、精於騎射，曾任兵馬都監、都監、行營兵馬都監。（中国历代人物传记资料库 CBDB 38294）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mawdBK7G1UeTgFWAwIcfMv
          claim_id: c_CJeWLBT8rP65MoZ4T5doq5
          source_id: s_nV4MaUuWGdefQd96RaG1Wf
          stance: supports
          locator: CBDB:38294
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_icQ7U9gmx24aCJyCY0XZy9
        subject_person_id: p_4DMwFrJ3LdwEVHWXHa7AR4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_aQUm4rgRek7xJEszjxoqQS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QlwjOmso-bEOXShbOMqbPC
          claim_id: c_icQ7U9gmx24aCJyCY0XZy9
          source_id: s_nV4MaUuWGdefQd96RaG1Wf
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1560：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_aQUm4rgRek7xJEszjxoqQS
        status: active
        display_name: 王光祖
        merged_into_person_id: null
    - claim:
        id: c_5HBFd8xYOBt3HwumMjxJ07
        subject_person_id: p_4DMwFrJ3LdwEVHWXHa7AR4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DQhLjxe4hW6pcn7G3Cc97m
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_N7R_QvUnL0xXwdqQsIPj9F
          claim_id: c_5HBFd8xYOBt3HwumMjxJ07
          source_id: s_qi79DLmTGF1QFokNwrstLQ
          stance: supports
          locator: 宋人傳記資料索引(電子版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_qi79DLmTGF1QFokNwrstLQ
            source_type: api_record
            title: 中国历代人物传记资料库：王光世（CBDB 38775）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38775&o=json
            external_identifier: CBDB:38775
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.551Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_DQhLjxe4hW6pcn7G3Cc97m
        status: active
        display_name: 王光世
        merged_into_person_id: null
    - claim:
        id: c_Dvs3Rb03QxOJf-hGBLNK7W
        subject_person_id: p_4DMwFrJ3LdwEVHWXHa7AR4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9DSGNufkeHidpgbtuFJZ47
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SSG-pZhHLYjxgYmwwvfSng
          claim_id: c_Dvs3Rb03QxOJf-hGBLNK7W
          source_id: s_a9Y3o9uBPGQfnLPBVBhSwf
          stance: supports
          locator: 宋人傳記資料索引(電子版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_a9Y3o9uBPGQfnLPBVBhSwf
            source_type: api_record
            title: 中国历代人物传记资料库：王光嗣（CBDB 38798）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38798&o=json
            external_identifier: CBDB:38798
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:47.307Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_9DSGNufkeHidpgbtuFJZ47
        status: active
        display_name: 王光嗣
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_Ez6WKrbF1dofFOBTlvzDCf
        subject_person_id: p_4DMwFrJ3LdwEVHWXHa7AR4
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_eYTYqcoj54BTfQQyLN9VGt
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BfdhjA1cQ9qC6drvmCmvpW
          claim_id: c_Ez6WKrbF1dofFOBTlvzDCf
          source_id: s_nV4MaUuWGdefQd96RaG1Wf
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1034：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_eYTYqcoj54BTfQQyLN9VGt
        status: active
        display_name: 王稟
        merged_into_person_id: null
  other: []
---

# 王珪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珪 | accepted |
| bio.summary | 王珪，宋人物。籍贯開封，身份为精於某種兵器、精於騎射，曾任兵馬都監、都監、行營兵馬都監。（中国历代人物传记资料库 CBDB 38294） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_aQUm4rgRek7xJEszjxoqQS | 王光祖 | accepted |
| children | p_DQhLjxe4hW6pcn7G3Cc97m | 王光世 | accepted |
| children | p_9DSGNufkeHidpgbtuFJZ47 | 王光嗣 | accepted |
| descendants | p_eYTYqcoj54BTfQQyLN9VGt | 王稟 | accepted |

## 外部来源

- [中国历代人物传记资料库：王光世（CBDB 38775）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38775&o=json)
- [中国历代人物传记资料库：王光嗣（CBDB 38798）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38798&o=json)
- [中国历代人物传记资料库：王珪（CBDB 38294）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38294&o=json)
