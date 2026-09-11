---
schema: wang-person/v1
id: p_bVznNBP2hMh6tDWAzv1nG9
status: active
merged_into: null
display_name: 王钻
cbdb_id: 262449
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FVa2c19emo5ePSMCWnoMar
        subject_person_id: p_bVznNBP2hMh6tDWAzv1nG9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王钻，明人物。CBDB 记录其籍贯记录为黃縣，曾任衛經歷。中国历代人物传记资料库（CBDB）以人物编号 262449 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_rAvwkqtBXjPY12gtvjBUEW
          claim_id: c_FVa2c19emo5ePSMCWnoMar
          source_id: s_eD7NLF6NGLJdx2pWAXc9KE
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_eD7NLF6NGLJdx2pWAXc9KE
            source_type: api_record
            title: 维基数据：王钻（Q45476540）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45476540
            external_identifier: Q45476540
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:38.937Z
            metadata_json: null
        - id: cs_aIQ5y2NyAb-vA_aXif1U4k
          claim_id: c_FVa2c19emo5ePSMCWnoMar
          source_id: s_ckw8dsB44HA4YBtQnF33qH
          stance: supports
          locator: CBDB:262449
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_ckw8dsB44HA4YBtQnF33qH
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王鑽（262449）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262449&o=json
            external_identifier: CBDB:262449
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:39.127Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_UJA9wqa3XQGmfLdFH24x39
        subject_person_id: p_bVznNBP2hMh6tDWAzv1nG9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王钻
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_SHNLfiYZpe8r1mYmjMEYB2
          claim_id: c_UJA9wqa3XQGmfLdFH24x39
          source_id: s_ckw8dsB44HA4YBtQnF33qH
          stance: supports
          locator: Q45476540
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_aTyDrfjxFeqFef1xE77yP5
          claim_id: c_UJA9wqa3XQGmfLdFH24x39
          source_id: s_eD7NLF6NGLJdx2pWAXc9KE
          stance: supports
          locator: Q45476540
          quotation: null
          interpretation_note: null
          source:
            id: s_eD7NLF6NGLJdx2pWAXc9KE
            source_type: api_record
            title: 维基数据：王钻（Q45476540）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45476540
            external_identifier: Q45476540
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:38.937Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_VDS1CA9pGmScdCZTd9dY9a
        subject_person_id: p_snnHYhecDpk5HZ7B1gQ1jo
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bVznNBP2hMh6tDWAzv1nG9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4iTzFjikT9J12zUTV9Kwrd
          claim_id: c_VDS1CA9pGmScdCZTd9dY9a
          source_id: s_eD7NLF6NGLJdx2pWAXc9KE
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_eD7NLF6NGLJdx2pWAXc9KE
            source_type: api_record
            title: 维基数据：王钻（Q45476540）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45476540
            external_identifier: Q45476540
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:38.937Z
            metadata_json: null
        - id: cs_kH5yHLKkhLQACUGeEDqTMv
          claim_id: c_VDS1CA9pGmScdCZTd9dY9a
          source_id: s_BpgY9e7UVYQnxYEkXLzmPM
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_BpgY9e7UVYQnxYEkXLzmPM
            source_type: api_record
            title: 维基数据：王琏（Q45476476）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45476476
            external_identifier: Q45476476
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:57.484Z
            metadata_json: null
      object_person:
        id: p_snnHYhecDpk5HZ7B1gQ1jo
        status: active
        display_name: 王琏
        merged_into_person_id: null
  children:
    - claim:
        id: c_VCiHZEAoSLTMHEQ51TrfBj
        subject_person_id: p_bVznNBP2hMh6tDWAzv1nG9
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_3SWv8LY5fsb1rb4ZwewsLo
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Z2x2DBX5ZuQENYQ56txTPL
          claim_id: c_VCiHZEAoSLTMHEQ51TrfBj
          source_id: s_eD7NLF6NGLJdx2pWAXc9KE
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_eD7NLF6NGLJdx2pWAXc9KE
            source_type: api_record
            title: 维基数据：王钻（Q45476540）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45476540
            external_identifier: Q45476540
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:38.937Z
            metadata_json: null
        - id: cs_jwrg2xHKcAGGxPFjveHny5
          claim_id: c_VCiHZEAoSLTMHEQ51TrfBj
          source_id: s_6HmtB82CwUfnZsN8f8ZvkG
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_6HmtB82CwUfnZsN8f8ZvkG
            source_type: api_record
            title: 维基数据：王时中（Q15913916）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15913916
            external_identifier: Q15913916
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:47:14.516Z
            metadata_json: null
      object_person:
        id: p_3SWv8LY5fsb1rb4ZwewsLo
        status: active
        display_name: 王时中
        merged_into_person_id: null
    - claim:
        id: c_EdR-0N5fC-b-zB6YA3ZG_v
        subject_person_id: p_bVznNBP2hMh6tDWAzv1nG9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fEfMjJL54WdS6wVP79X5vL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tAle7BNTGle2qrw6mX4bnU
          claim_id: c_EdR-0N5fC-b-zB6YA3ZG_v
          source_id: s_XorrntH4J6QdzdVHhn6Fby
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第三甲第六十五名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_XorrntH4J6QdzdVHhn6Fby
            source_type: api_record
            title: 中国历代人物传记资料库：王時中（CBDB 68328）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68328&o=json
            external_identifier: CBDB:68328
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.066Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_fEfMjJL54WdS6wVP79X5vL
        status: active
        display_name: 王時中
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王钻

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王钻，明人物。CBDB 记录其籍贯记录为黃縣，曾任衛經歷。中国历代人物传记资料库（CBDB）以人物编号 262449 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王钻 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_snnHYhecDpk5HZ7B1gQ1jo | 王琏 | accepted |
| children | p_3SWv8LY5fsb1rb4ZwewsLo | 王时中 | accepted |
| children | p_fEfMjJL54WdS6wVP79X5vL | 王時中 | accepted |

## 外部来源

- [维基数据：王琏（Q45476476）](https://www.wikidata.org/wiki/Q45476476)
- [维基数据：王时中（Q15913916）](https://www.wikidata.org/wiki/Q15913916)
- [维基数据：王钻（Q45476540）](https://www.wikidata.org/wiki/Q45476540)
- [中国历代人物传记资料库：王時中（CBDB 68328）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68328&o=json)
- [CBDB 中国历代人物传记资料库：王鑽（262449）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262449&o=json)
