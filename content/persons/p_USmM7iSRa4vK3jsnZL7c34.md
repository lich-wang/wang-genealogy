---
schema: wang-person/v1
id: p_USmM7iSRa4vK3jsnZL7c34
status: active
merged_into: null
display_name: 王文
revision: 8
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8qQfibF98caJyabJ7nLpB7
        subject_person_id: p_USmM7iSRa4vK3jsnZL7c34
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PUuEEJDcNEtMDFYRSZQZAH
          claim_id: c_8qQfibF98caJyabJ7nLpB7
          source_id: s_4P3H53m9s75BCXnWaQcBse
          stance: supports
          locator: CBDB:270427
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（270427）
          source: &a1
            id: s_4P3H53m9s75BCXnWaQcBse
            source_type: api_record
            title: 中国历代人物传记资料库：王文（CBDB 270427）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270427&o=json
            external_identifier: CBDB:270427
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.831Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uc5SR4f7ZroajpBKNr55qo
        subject_person_id: p_USmM7iSRa4vK3jsnZL7c34
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文，明人物。弘治十五年進士，籍贯鹽山。（中国历代人物传记资料库 CBDB 270427）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_C9vKdopfTVjbqvPL2DV9rk
          claim_id: c_uc5SR4f7ZroajpBKNr55qo
          source_id: s_4P3H53m9s75BCXnWaQcBse
          stance: supports
          locator: CBDB:270427
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_MCQVAs4Fmrf89qEhHOoJ6p
        subject_person_id: p_USmM7iSRa4vK3jsnZL7c34
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_p6LM7kMHNYz7GAHB99D8XL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dcJpOwOUQG4K-L1g7M7dAZ
          claim_id: c_MCQVAs4Fmrf89qEhHOoJ6p
          source_id: s_4P3H53m9s75BCXnWaQcBse
          stance: supports
          locator: 弘治十五年進士登科錄:一卷，第二甲第六十四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_p6LM7kMHNYz7GAHB99D8XL
        status: active
        display_name: 王顯道
        merged_into_person_id: null
    - claim:
        id: c_bRAcyj3Up5DIIWb2zYEi5I
        subject_person_id: p_USmM7iSRa4vK3jsnZL7c34
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_34cS2Kr834iH2AeExpmt6V
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dN9kHw67CQhYoQ60Mmmg4A
          claim_id: c_bRAcyj3Up5DIIWb2zYEi5I
          source_id: s_PQ7G6VxfsxlmM24ju7ibvv
          stance: supports
          locator: CBDB：兄弟 王顯道（201310）之父／母 王文
          quotation: null
          interpretation_note: 由兄弟关系推断：王立道 与 王顯道 为同胞（CBDB 记「兄」），王顯道 之父／母即 王立道 之父／母。
          source:
            id: s_PQ7G6VxfsxlmM24ju7ibvv
            source_type: api_record
            title: 中国历代人物传记资料库：王立道（CBDB 270436）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270436&o=json
            external_identifier: CBDB:270436
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_34cS2Kr834iH2AeExpmt6V
        status: active
        display_name: 王立道
        merged_into_person_id: null
    - claim:
        id: c_plkOhiC_ot6iwz8RrNHzS7
        subject_person_id: p_USmM7iSRa4vK3jsnZL7c34
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EGWu3kuNQhVSiewcJGE7Qn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KCYv8ujN6uJnddrpIJcJD2
          claim_id: c_plkOhiC_ot6iwz8RrNHzS7
          source_id: s_8e4J-1_PEs-Xm80wSxnjk4
          stance: supports
          locator: CBDB：兄弟 王顯道（201310）之父／母 王文
          quotation: null
          interpretation_note: 由兄弟关系推断：王弘道 与 王顯道 为同胞（CBDB 记「弟」），王顯道 之父／母即 王弘道 之父／母。
          source:
            id: s_8e4J-1_PEs-Xm80wSxnjk4
            source_type: api_record
            title: 中国历代人物传记资料库：王弘道（CBDB 270431）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270431&o=json
            external_identifier: CBDB:270431
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EGWu3kuNQhVSiewcJGE7Qn
        status: active
        display_name: 王弘道
        merged_into_person_id: null
    - claim:
        id: c_DFLogIJjIPTLEPGK1R6bKJ
        subject_person_id: p_USmM7iSRa4vK3jsnZL7c34
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_L1Ho9yrtJTHQudAEoWQ1BH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xhRuhsSPSLXYw7HH1wcD7K
          claim_id: c_DFLogIJjIPTLEPGK1R6bKJ
          source_id: s_buP98Ush87pfUgYtWdkNoD
          stance: supports
          locator: CBDB：兄弟 王顯道（201310）之父／母 王文
          quotation: null
          interpretation_note: 由兄弟关系推断：王友道 与 王顯道 为同胞（CBDB 记「弟」），王顯道 之父／母即 王友道 之父／母。
          source:
            id: s_buP98Ush87pfUgYtWdkNoD
            source_type: api_record
            title: 中国历代人物传记资料库：王友道（CBDB 270433）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270433&o=json
            external_identifier: CBDB:270433
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_L1Ho9yrtJTHQudAEoWQ1BH
        status: active
        display_name: 王友道
        merged_into_person_id: null
    - claim:
        id: c_Zk6hoiBIb0KRohZYkqcvni
        subject_person_id: p_USmM7iSRa4vK3jsnZL7c34
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Nbyp7Q45BBMbVdfdxRf8mP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tlKyNpYKUZCRGCUVb48eOQ
          claim_id: c_Zk6hoiBIb0KRohZYkqcvni
          source_id: s_zFChXzTW0jg_oYvsF6hw1k
          stance: supports
          locator: CBDB：兄弟 王顯道（201310）之父／母 王文
          quotation: null
          interpretation_note: 由兄弟关系推断：王凝道 与 王顯道 为同胞（CBDB 记「兄」），王顯道 之父／母即 王凝道 之父／母。
          source:
            id: s_zFChXzTW0jg_oYvsF6hw1k
            source_type: api_record
            title: 中国历代人物传记资料库：王凝道（CBDB 270434）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270434&o=json
            external_identifier: CBDB:270434
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Nbyp7Q45BBMbVdfdxRf8mP
        status: active
        display_name: 王凝道
        merged_into_person_id: null
    - claim:
        id: c_ca31dQKpD27FuytCh-PLBs
        subject_person_id: p_USmM7iSRa4vK3jsnZL7c34
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RGeyL1DKo6yERKUnwsv1J8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_W1dy_-kk1WymKRJ8qImC4i
          claim_id: c_ca31dQKpD27FuytCh-PLBs
          source_id: s_f6Yi4WXsc-hRa156olTFVS
          stance: supports
          locator: CBDB：兄弟 王顯道（201310）之父／母 王文
          quotation: null
          interpretation_note: 由兄弟关系推断：王宗道 与 王顯道 为同胞（CBDB 记「弟」），王顯道 之父／母即 王宗道 之父／母。
          source:
            id: s_f6Yi4WXsc-hRa156olTFVS
            source_type: api_record
            title: 中国历代人物传记资料库：王宗道（CBDB 270432）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270432&o=json
            external_identifier: CBDB:270432
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_RGeyL1DKo6yERKUnwsv1J8
        status: active
        display_name: 王宗道
        merged_into_person_id: null
    - claim:
        id: c_zs1ulXEBUcWfAmP6MwN8NY
        subject_person_id: p_USmM7iSRa4vK3jsnZL7c34
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_X8AwhcwnhmdWwbA9qts7mg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nb-1v64NvYoCvHp3DcJlq0
          claim_id: c_zs1ulXEBUcWfAmP6MwN8NY
          source_id: s_iQmnN3ufkYtw2tcIrhks6Z
          stance: supports
          locator: CBDB：兄弟 王顯道（201310）之父／母 王文
          quotation: null
          interpretation_note: 由兄弟关系推断：王志道 与 王顯道 为同胞（CBDB 记「兄」），王顯道 之父／母即 王志道 之父／母。
          source:
            id: s_iQmnN3ufkYtw2tcIrhks6Z
            source_type: api_record
            title: 中国历代人物传记资料库：王志道（CBDB 270435）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270435&o=json
            external_identifier: CBDB:270435
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_X8AwhcwnhmdWwbA9qts7mg
        status: active
        display_name: 王志道
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王文

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文 | accepted |
| bio.summary | 王文，明人物。弘治十五年進士，籍贯鹽山。（中国历代人物传记资料库 CBDB 270427） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_p6LM7kMHNYz7GAHB99D8XL | 王顯道 | accepted |
| children | p_34cS2Kr834iH2AeExpmt6V | 王立道 | accepted |
| children | p_EGWu3kuNQhVSiewcJGE7Qn | 王弘道 | accepted |
| children | p_L1Ho9yrtJTHQudAEoWQ1BH | 王友道 | accepted |
| children | p_Nbyp7Q45BBMbVdfdxRf8mP | 王凝道 | accepted |
| children | p_RGeyL1DKo6yERKUnwsv1J8 | 王宗道 | accepted |
| children | p_X8AwhcwnhmdWwbA9qts7mg | 王志道 | accepted |

## 外部来源

- [中国历代人物传记资料库：王弘道（CBDB 270431）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270431&o=json)
- [中国历代人物传记资料库：王立道（CBDB 270436）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270436&o=json)
- [中国历代人物传记资料库：王凝道（CBDB 270434）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270434&o=json)
- [中国历代人物传记资料库：王文（CBDB 270427）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270427&o=json)
- [中国历代人物传记资料库：王友道（CBDB 270433）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270433&o=json)
- [中国历代人物传记资料库：王志道（CBDB 270435）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270435&o=json)
- [中国历代人物传记资料库：王宗道（CBDB 270432）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270432&o=json)
