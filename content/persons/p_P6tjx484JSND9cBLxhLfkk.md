---
schema: wang-person/v1
id: p_P6tjx484JSND9cBLxhLfkk
status: active
merged_into: null
display_name: 王胄
cbdb_id: 32172
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2BA3yvNNxHwNFVnVFhd4i1
        subject_person_id: p_P6tjx484JSND9cBLxhLfkk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王胄，唐人物。CBDB 记录其籍贯记录为祁縣，曾任協律郎。中国历代人物传记资料库（CBDB）以人物编号 32172 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_2UiTH9uEWiLkPm47o5cqZe
          claim_id: c_2BA3yvNNxHwNFVnVFhd4i1
          source_id: s_BAwJwAgNmuXwsxs8JuEuLB
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_BAwJwAgNmuXwsxs8JuEuLB
            source_type: api_record
            title: 维基数据：王胄（Q45421029）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45421029
            external_identifier: Q45421029
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:25.218Z
            metadata_json: null
        - id: cs_0h4Xj2lnKZndNScS5Evi8s
          claim_id: c_2BA3yvNNxHwNFVnVFhd4i1
          source_id: s_dHUf44WWxwuAr9NUFLwqKP
          stance: supports
          locator: CBDB:32172
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_dHUf44WWxwuAr9NUFLwqKP
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王冑（32172）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=32172&o=json
            external_identifier: CBDB:32172
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:49:25.349Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_7JbRUfZoJ5AfV4PH3BKvBk
        subject_person_id: p_P6tjx484JSND9cBLxhLfkk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王胄
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_8hmJB9g85GKBWj8uKQSdyB
          claim_id: c_7JbRUfZoJ5AfV4PH3BKvBk
          source_id: s_dHUf44WWxwuAr9NUFLwqKP
          stance: supports
          locator: Q45421029
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_n5B2hmrZ7PXw3JMmn1g1De
          claim_id: c_7JbRUfZoJ5AfV4PH3BKvBk
          source_id: s_BAwJwAgNmuXwsxs8JuEuLB
          stance: supports
          locator: Q45421029
          quotation: null
          interpretation_note: null
          source:
            id: s_BAwJwAgNmuXwsxs8JuEuLB
            source_type: api_record
            title: 维基数据：王胄（Q45421029）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45421029
            external_identifier: Q45421029
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:25.218Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_1LGurg2NtkpYciUKkiymZJ
        subject_person_id: p_3D1DXfRjgxbNyEkFbBWiyC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_P6tjx484JSND9cBLxhLfkk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_44xsWB2DUm6kbGntrLaFZ9
          claim_id: c_1LGurg2NtkpYciUKkiymZJ
          source_id: s_dHUf44WWxwuAr9NUFLwqKP
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_dHUf44WWxwuAr9NUFLwqKP
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王冑（32172）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=32172&o=json
            external_identifier: CBDB:32172
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:49:25.349Z
            metadata_json: null
        - id: cs_gPfLaByGua1DCK6SpSbpHM
          claim_id: c_1LGurg2NtkpYciUKkiymZJ
          source_id: s_BAwJwAgNmuXwsxs8JuEuLB
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_BAwJwAgNmuXwsxs8JuEuLB
            source_type: api_record
            title: 维基数据：王胄（Q45421029）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45421029
            external_identifier: Q45421029
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:25.218Z
            metadata_json: null
        - id: cs_JWz3pm933b2jBFWAUbZY9y
          claim_id: c_1LGurg2NtkpYciUKkiymZJ
          source_id: s_SGeUn7oQG4uicqAJGWJA5A
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_SGeUn7oQG4uicqAJGWJA5A
            source_type: api_record
            title: 维基数据：王知节（Q45421025）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45421025
            external_identifier: Q45421025
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:09:57.561Z
            metadata_json: null
        - id: cs_XWoujFtyH5PDfyK3VEGzF6
          claim_id: c_1LGurg2NtkpYciUKkiymZJ
          source_id: s_v7Zos8fpr7t7VPidHANY8z
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_v7Zos8fpr7t7VPidHANY8z
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王知節（32171）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=32171&o=json
            external_identifier: CBDB:32171
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:09:57.714Z
            metadata_json: null
      object_person:
        id: p_3D1DXfRjgxbNyEkFbBWiyC
        status: active
        display_name: 王知节
        merged_into_person_id: null
  children:
    - claim:
        id: c_25t5T6SnzvEvLrr8Pwsspe
        subject_person_id: p_P6tjx484JSND9cBLxhLfkk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LhrXSwBKuTqBng4RsWfQ9E
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_2qWXzcYNHp14Mtr6nphKpL
          claim_id: c_25t5T6SnzvEvLrr8Pwsspe
          source_id: s_HqRrMT9yszgHjvPBBXB6LL
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_HqRrMT9yszgHjvPBBXB6LL
            source_type: api_record
            title: 維基數據：王处廉（Q45421031）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45421031
            external_identifier: Q45421031
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:09:53.926Z
            metadata_json: null
        - id: cs_XQN96q3riqkb5Wyy2cbiZT
          claim_id: c_25t5T6SnzvEvLrr8Pwsspe
          source_id: s_aNun5qZFaVaT8dqBJrt7kz
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_aNun5qZFaVaT8dqBJrt7kz
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王處廉（32173）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=32173&o=json
            external_identifier: CBDB:32173
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:50:25.998Z
            metadata_json: null
        - id: cs_N5RMhc8Bc5moL8SVXvUv1m
          claim_id: c_25t5T6SnzvEvLrr8Pwsspe
          source_id: s_BAwJwAgNmuXwsxs8JuEuLB
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_BAwJwAgNmuXwsxs8JuEuLB
            source_type: api_record
            title: 维基数据：王胄（Q45421029）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45421029
            external_identifier: Q45421029
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:25.218Z
            metadata_json: null
        - id: cs_KFUau6Rm2HSoDDuspDhGoh
          claim_id: c_25t5T6SnzvEvLrr8Pwsspe
          source_id: s_dHUf44WWxwuAr9NUFLwqKP
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_dHUf44WWxwuAr9NUFLwqKP
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王冑（32172）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=32172&o=json
            external_identifier: CBDB:32172
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:49:25.349Z
            metadata_json: null
      object_person:
        id: p_LhrXSwBKuTqBng4RsWfQ9E
        status: active
        display_name: 王处廉
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王胄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王胄，唐人物。CBDB 记录其籍贯记录为祁縣，曾任協律郎。中国历代人物传记资料库（CBDB）以人物编号 32172 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王胄 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_3D1DXfRjgxbNyEkFbBWiyC | 王知节 | accepted |
| children | p_LhrXSwBKuTqBng4RsWfQ9E | 王处廉 | accepted |

## 外部来源

- [维基数据：王知节（Q45421025）](https://www.wikidata.org/wiki/Q45421025)
- [维基数据：王胄（Q45421029）](https://www.wikidata.org/wiki/Q45421029)
- [維基數據：王处廉（Q45421031）](https://www.wikidata.org/wiki/Q45421031)
- [CBDB 中国历代人物传记资料库：王處廉（32173）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=32173&o=json)
- [CBDB 中国历代人物传记资料库：王知節（32171）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=32171&o=json)
- [CBDB 中国历代人物传记资料库：王冑（32172）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=32172&o=json)
