---
schema: wang-person/v1
id: p_WdFmE9KEnRrkWkP6FtALJ2
status: active
merged_into: null
display_name: 王晊
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pgjiX8eiPpazoBL72DTkLt
        subject_person_id: p_WdFmE9KEnRrkWkP6FtALJ2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晊（卒于709年），唐人物。CBDB 记录其籍贯记录为咸陽，曾任殿中侍御史。中国历代人物传记资料库（CBDB）以人物编号 175566 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_FQTKB5e1n4acMQq8tUkxHx
          claim_id: c_pgjiX8eiPpazoBL72DTkLt
          source_id: s_A3t2BfLcSEy2L6jFAPaL6Y
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_A3t2BfLcSEy2L6jFAPaL6Y
            source_type: api_record
            title: 维基数据：王晊（Q45666881）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45666881
            external_identifier: Q45666881
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:37.839Z
            metadata_json: null
        - id: cs_gi1f3uYNXP5SdX5N1D-Fmz
          claim_id: c_pgjiX8eiPpazoBL72DTkLt
          source_id: s_7tGK7Wom7bZhgr6w5d9AXG
          stance: supports
          locator: CBDB:175566
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_7tGK7Wom7bZhgr6w5d9AXG
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王晊（175566）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175566&o=json
            external_identifier: CBDB:175566
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:38.003Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_eVUScH99kNL13uAbeWNkFv
        subject_person_id: p_WdFmE9KEnRrkWkP6FtALJ2
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 709年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0709-01-01
            latest: 0709-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rKedE2Ceor8TX9SAxRC9LH
          claim_id: c_eVUScH99kNL13uAbeWNkFv
          source_id: s_A3t2BfLcSEy2L6jFAPaL6Y
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_A3t2BfLcSEy2L6jFAPaL6Y
            source_type: api_record
            title: 维基数据：王晊（Q45666881）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45666881
            external_identifier: Q45666881
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:37.839Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_XARURP4Z7PtnyrFreRCL6H
        subject_person_id: p_WdFmE9KEnRrkWkP6FtALJ2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晊
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_L8yhP1FspjuKyyk8Rx72CN
          claim_id: c_XARURP4Z7PtnyrFreRCL6H
          source_id: s_7tGK7Wom7bZhgr6w5d9AXG
          stance: supports
          locator: Q45666881
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_c8L5jqxcyChb52tRJpyKuW
          claim_id: c_XARURP4Z7PtnyrFreRCL6H
          source_id: s_A3t2BfLcSEy2L6jFAPaL6Y
          stance: supports
          locator: Q45666881
          quotation: null
          interpretation_note: null
          source:
            id: s_A3t2BfLcSEy2L6jFAPaL6Y
            source_type: api_record
            title: 维基数据：王晊（Q45666881）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45666881
            external_identifier: Q45666881
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:37.839Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_3RXCCg3qvzZBMZd7p1tTLq
        subject_person_id: p_ZSBMnefxQNX4zwGDPTrYX5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WdFmE9KEnRrkWkP6FtALJ2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_5CCzPQHhQBnRHXyxG3QAMj
          claim_id: c_3RXCCg3qvzZBMZd7p1tTLq
          source_id: s_CTC777F2HSKbjF4ZdjzJur
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_CTC777F2HSKbjF4ZdjzJur
            source_type: api_record
            title: 维基数据：王方庆（Q7478164）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q7478164
            external_identifier: Q7478164
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:04:19.421Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%96%B9%E5%BA%86
        - id: cs_rHnRJMZCKAJqkypCM2LkS8
          claim_id: c_3RXCCg3qvzZBMZd7p1tTLq
          source_id: s_7Npqc2V4HZVXpCQ8BDZJQV
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_7Npqc2V4HZVXpCQ8BDZJQV
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王綝（175451）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175451&o=json
            external_identifier: CBDB:175451
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:04:19.563Z
            metadata_json: null
        - id: cs_qAYJQR8T6TBvL25j4tVL4x
          claim_id: c_3RXCCg3qvzZBMZd7p1tTLq
          source_id: s_A3t2BfLcSEy2L6jFAPaL6Y
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_A3t2BfLcSEy2L6jFAPaL6Y
            source_type: api_record
            title: 维基数据：王晊（Q45666881）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45666881
            external_identifier: Q45666881
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:37.839Z
            metadata_json: null
        - id: cs_dmgAHTQrC94ebjXmmXeJwP
          claim_id: c_3RXCCg3qvzZBMZd7p1tTLq
          source_id: s_7tGK7Wom7bZhgr6w5d9AXG
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_7tGK7Wom7bZhgr6w5d9AXG
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王晊（175566）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175566&o=json
            external_identifier: CBDB:175566
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:38.003Z
            metadata_json: null
      object_person:
        id: p_ZSBMnefxQNX4zwGDPTrYX5
        status: active
        display_name: 王方庆
        merged_into_person_id: null
  children:
    - claim:
        id: c_qk2vBVPH9pvZzGpyeRqKrP
        subject_person_id: p_WdFmE9KEnRrkWkP6FtALJ2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_SfcEYoZkoLruJ4uuLuNwXA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_9yvVLNqWQYzDeaVCSF8vRC
          claim_id: c_qk2vBVPH9pvZzGpyeRqKrP
          source_id: s_A3t2BfLcSEy2L6jFAPaL6Y
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_A3t2BfLcSEy2L6jFAPaL6Y
            source_type: api_record
            title: 维基数据：王晊（Q45666881）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45666881
            external_identifier: Q45666881
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:37.839Z
            metadata_json: null
        - id: cs_EEAFPHxS2gADUiJGdZx61w
          claim_id: c_qk2vBVPH9pvZzGpyeRqKrP
          source_id: s_7tGK7Wom7bZhgr6w5d9AXG
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_7tGK7Wom7bZhgr6w5d9AXG
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王晊（175566）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175566&o=json
            external_identifier: CBDB:175566
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:38.003Z
            metadata_json: null
        - id: cs_JL3Yy62mTVPDi6aagi3vZ1
          claim_id: c_qk2vBVPH9pvZzGpyeRqKrP
          source_id: s_CDmGssuD4bbsbkTxTHmB8V
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_CDmGssuD4bbsbkTxTHmB8V
            source_type: api_record
            title: 维基数据：王寰（Q45666933）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45666933
            external_identifier: Q45666933
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:35.625Z
            metadata_json: null
        - id: cs_YFFeXFwNfKDxxVKL76tu33
          claim_id: c_qk2vBVPH9pvZzGpyeRqKrP
          source_id: s_wb4Nstb43vxda3d1EoF9mK
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_wb4Nstb43vxda3d1EoF9mK
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王寰（175567）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175567&o=json
            external_identifier: CBDB:175567
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:35.939Z
            metadata_json: null
      object_person:
        id: p_SfcEYoZkoLruJ4uuLuNwXA
        status: active
        display_name: 王寰
        merged_into_person_id: null
    - claim:
        id: c_mR8KQFhN9vLfBxy2Bno5TE
        subject_person_id: p_WdFmE9KEnRrkWkP6FtALJ2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4AFVL7D2qkGJ7zeboMLC8m
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_1ANKtZ4gRRmkoN6gouQU2S
          claim_id: c_mR8KQFhN9vLfBxy2Bno5TE
          source_id: s_7tGK7Wom7bZhgr6w5d9AXG
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_7tGK7Wom7bZhgr6w5d9AXG
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王晊（175566）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175566&o=json
            external_identifier: CBDB:175566
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:38.003Z
            metadata_json: null
        - id: cs_jKVEJwHA7NEGuV9QAUYDWj
          claim_id: c_mR8KQFhN9vLfBxy2Bno5TE
          source_id: s_A3t2BfLcSEy2L6jFAPaL6Y
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_A3t2BfLcSEy2L6jFAPaL6Y
            source_type: api_record
            title: 维基数据：王晊（Q45666881）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45666881
            external_identifier: Q45666881
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:37.839Z
            metadata_json: null
        - id: cs_idGvNezjBxTUrsB7VyDQo3
          claim_id: c_mR8KQFhN9vLfBxy2Bno5TE
          source_id: s_Pk3Pwfrpc4jo4EVzSm5d5v
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_Pk3Pwfrpc4jo4EVzSm5d5v
            source_type: api_record
            title: 维基数据：王寂（Q45667093）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45667093
            external_identifier: Q45667093
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:35.625Z
            metadata_json: null
        - id: cs_5zS9EVAgSLw6sWr3h93DjT
          claim_id: c_mR8KQFhN9vLfBxy2Bno5TE
          source_id: s_dju6nn4sQt1MDHeUnHhavY
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_dju6nn4sQt1MDHeUnHhavY
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王寂（175570）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175570&o=json
            external_identifier: CBDB:175570
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:35.930Z
            metadata_json: null
      object_person:
        id: p_4AFVL7D2qkGJ7zeboMLC8m
        status: active
        display_name: 王寂
        merged_into_person_id: null
    - claim:
        id: c_Vm9a456FyxfWo8tVaRB9nL
        subject_person_id: p_WdFmE9KEnRrkWkP6FtALJ2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TG2Yq5C8bx1R5aGv84C1Qh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_hjKr7x8MeWMfwPPVCk3iRe
          claim_id: c_Vm9a456FyxfWo8tVaRB9nL
          source_id: s_A3t2BfLcSEy2L6jFAPaL6Y
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_A3t2BfLcSEy2L6jFAPaL6Y
            source_type: api_record
            title: 维基数据：王晊（Q45666881）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45666881
            external_identifier: Q45666881
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:37.839Z
            metadata_json: null
        - id: cs_rFdksN9CTZBG2oyME1kWk5
          claim_id: c_Vm9a456FyxfWo8tVaRB9nL
          source_id: s_7tGK7Wom7bZhgr6w5d9AXG
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_7tGK7Wom7bZhgr6w5d9AXG
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王晊（175566）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175566&o=json
            external_identifier: CBDB:175566
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:38.003Z
            metadata_json: null
        - id: cs_ELYo3oxaKwkFYgWz897dSs
          claim_id: c_Vm9a456FyxfWo8tVaRB9nL
          source_id: s_ZheKpgSfQ4gfiqJmAbC8uR
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_ZheKpgSfQ4gfiqJmAbC8uR
            source_type: api_record
            title: 维基数据：王宁（Q45667198）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45667198
            external_identifier: Q45667198
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:38.290Z
            metadata_json: null
        - id: cs_iFoCn5CRLnkE8td4iQSwhM
          claim_id: c_Vm9a456FyxfWo8tVaRB9nL
          source_id: s_J9pJZvBKchhHHxeRL4gupL
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_J9pJZvBKchhHHxeRL4gupL
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王寧（175572）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175572&o=json
            external_identifier: CBDB:175572
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:38.443Z
            metadata_json: null
      object_person:
        id: p_TG2Yq5C8bx1R5aGv84C1Qh
        status: active
        display_name: 王宁
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王晊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王晊（卒于709年），唐人物。CBDB 记录其籍贯记录为咸陽，曾任殿中侍御史。中国历代人物传记资料库（CBDB）以人物编号 175566 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 709年 | accepted |
| name.primary | 王晊 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ZSBMnefxQNX4zwGDPTrYX5 | 王方庆 | accepted |
| children | p_SfcEYoZkoLruJ4uuLuNwXA | 王寰 | accepted |
| children | p_4AFVL7D2qkGJ7zeboMLC8m | 王寂 | accepted |
| children | p_TG2Yq5C8bx1R5aGv84C1Qh | 王宁 | accepted |

## 外部来源

- [维基数据：王方庆（Q7478164）](https://www.wikidata.org/wiki/Q7478164)
- [维基数据：王寰（Q45666933）](https://www.wikidata.org/wiki/Q45666933)
- [维基数据：王寂（Q45667093）](https://www.wikidata.org/wiki/Q45667093)
- [维基数据：王宁（Q45667198）](https://www.wikidata.org/wiki/Q45667198)
- [维基数据：王晊（Q45666881）](https://www.wikidata.org/wiki/Q45666881)
- [CBDB 中国历代人物传记资料库：王綝（175451）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175451&o=json)
- [CBDB 中国历代人物传记资料库：王寰（175567）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175567&o=json)
- [CBDB 中国历代人物传记资料库：王寂（175570）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175570&o=json)
- [CBDB 中国历代人物传记资料库：王寧（175572）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175572&o=json)
- [CBDB 中国历代人物传记资料库：王晊（175566）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175566&o=json)
