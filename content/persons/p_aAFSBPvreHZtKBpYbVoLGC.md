---
schema: wang-person/v1
id: p_aAFSBPvreHZtKBpYbVoLGC
status: active
merged_into: null
display_name: 王來賢
cbdb_id: 205758
revision: 4
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kCks2Y9NDRW2MY6PGyJGFF
        subject_person_id: p_aAFSBPvreHZtKBpYbVoLGC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王來賢（生于1539年），史料所见人物。本项目依据《中国历代人物传记资料库：王來賢（CBDB 205758）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_Hihk3_BNNOXI4RDJ6_amP_
          claim_id: c_kCks2Y9NDRW2MY6PGyJGFF
          source_id: s_nG3u1fXHMKXkKULdi4uZVa
          stance: supports
          locator: CBDB:205758
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_nG3u1fXHMKXkKULdi4uZVa
            source_type: api_record
            title: 中国历代人物传记资料库：王來賢（CBDB 205758）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205758&o=json
            external_identifier: CBDB:205758
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_n6ztciiPhrwbmEHceGy8Hx
        subject_person_id: p_aAFSBPvreHZtKBpYbVoLGC
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1539年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1539-01-01
            latest: 1539-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_d3RTrwvo7sN74WvWou4CX5
          claim_id: c_n6ztciiPhrwbmEHceGy8Hx
          source_id: s_nG3u1fXHMKXkKULdi4uZVa
          stance: supports
          locator: CBDB:205758
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1539
          source:
            id: s_nG3u1fXHMKXkKULdi4uZVa
            source_type: api_record
            title: 中国历代人物传记资料库：王來賢（CBDB 205758）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205758&o=json
            external_identifier: CBDB:205758
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_dn9GDdL5N5Vz7WCwz2gbsC
        subject_person_id: p_aAFSBPvreHZtKBpYbVoLGC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王來賢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_XqLzzp6UBWu2ETGCgCJ5fi
          claim_id: c_dn9GDdL5N5Vz7WCwz2gbsC
          source_id: s_nG3u1fXHMKXkKULdi4uZVa
          stance: supports
          locator: CBDB:205758
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1539
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_F5E816KORK9gEQVG5iunM8
        subject_person_id: p_QnpAMHvuyLgE52HMUUdB1Q
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_aAFSBPvreHZtKBpYbVoLGC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IaC7jgEeClKDl_h9PMAVlM
          claim_id: c_F5E816KORK9gEQVG5iunM8
          source_id: s_x8PPxyuPd6JN5n7t22Gjrm
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第二甲第十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_x8PPxyuPd6JN5n7t22Gjrm
            source_type: api_record
            title: 中国历代人物传记资料库：王好義（CBDB 338030）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338030&o=json
            external_identifier: CBDB:338030
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:08.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_QnpAMHvuyLgE52HMUUdB1Q
        status: active
        display_name: 王好義
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_cA9T05AC6kyOPQRywmBNED
        subject_person_id: p_Fi6YsLYSHhvvAgwEeFxrsc
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_aAFSBPvreHZtKBpYbVoLGC
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YsXWS1dCZQE5wQYmKzdcZF
          claim_id: c_cA9T05AC6kyOPQRywmBNED
          source_id: s_XiBupRw1zhddwsJgKR8zjN
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第二甲第十六名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_XiBupRw1zhddwsJgKR8zjN
            source_type: api_record
            title: 中国历代人物传记资料库：王華（CBDB 338029）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338029&o=json
            external_identifier: CBDB:338029
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.527Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Fi6YsLYSHhvvAgwEeFxrsc
        status: active
        display_name: 王華
        merged_into_person_id: null
    - claim:
        id: c_AV-fZxIVrP-TbS70s2pc_n
        subject_person_id: p_iWiRRfE7LECSLbXyBoUtix
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_aAFSBPvreHZtKBpYbVoLGC
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2uYKlB19GGpIMT-Yh1Zxs4
          claim_id: c_AV-fZxIVrP-TbS70s2pc_n
          source_id: s_6LRg5816jvDGu7DBgFGLDx
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第二甲第十六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_6LRg5816jvDGu7DBgFGLDx
            source_type: api_record
            title: 中国历代人物传记资料库：王澄（CBDB 338028）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338028&o=json
            external_identifier: CBDB:338028
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.526Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_iWiRRfE7LECSLbXyBoUtix
        status: active
        display_name: 王澄
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王來賢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王來賢（生于1539年），史料所见人物。本项目依据《中国历代人物传记资料库：王來賢（CBDB 205758）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 1539年 | accepted |
| name.primary | 王來賢 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_QnpAMHvuyLgE52HMUUdB1Q | 王好義 | accepted |
| ancestors | p_Fi6YsLYSHhvvAgwEeFxrsc | 王華 | accepted |
| ancestors | p_iWiRRfE7LECSLbXyBoUtix | 王澄 | accepted |

## 外部来源

- [中国历代人物传记资料库：王澄（CBDB 338028）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338028&o=json)
- [中国历代人物传记资料库：王好義（CBDB 338030）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338030&o=json)
- [中国历代人物传记资料库：王華（CBDB 338029）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338029&o=json)
- [中国历代人物传记资料库：王來賢（CBDB 205758）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205758&o=json)
