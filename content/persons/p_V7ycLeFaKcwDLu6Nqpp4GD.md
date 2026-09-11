---
schema: wang-person/v1
id: p_V7ycLeFaKcwDLu6Nqpp4GD
status: active
merged_into: null
display_name: 王仲山
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_89cfo1NMa18WGZSNS4edir
        subject_person_id: p_V7ycLeFaKcwDLu6Nqpp4GD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲山
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3d6sdugrYBtRKgNBGECkLH
          claim_id: c_89cfo1NMa18WGZSNS4edir
          source_id: s_DVJNegumBNKCf9uv11urxN
          stance: supports
          locator: CBDB:7081
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（7081）
          source: &a1
            id: s_DVJNegumBNKCf9uv11urxN
            source_type: api_record
            title: 中国历代人物传记资料库：王仲山（CBDB 7081）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=7081&o=json
            external_identifier: CBDB:7081
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.470Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ukgiyLZ2Et5o54vwbpqTu9
        subject_person_id: p_V7ycLeFaKcwDLu6Nqpp4GD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZbWBmATqUzXvWSoNEKimG1
          claim_id: c_ukgiyLZ2Et5o54vwbpqTu9
          source_id: s_DVJNegumBNKCf9uv11urxN
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_H4rEIA1nC0gpwJgmkw5EEV
        subject_person_id: p_V7ycLeFaKcwDLu6Nqpp4GD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4cye1JFWBJQv2VQjyoi17i
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-Ci6AwNfN2ZlBZXqapTOYf
          claim_id: c_H4rEIA1nC0gpwJgmkw5EEV
          source_id: s_ZgyH83hJEC3GCk1HRZreAC
          stance: supports
          locator: CBDB 双向互证（父 王仲山 ⇄ 子 王㬇）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_ZgyH83hJEC3GCk1HRZreAC
            source_type: api_record
            title: 中国历代人物传记资料库：王㬇（CBDB 1820）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1820&o=json
            external_identifier: CBDB:1820
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.285Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4cye1JFWBJQv2VQjyoi17i
        status: active
        display_name: 王㬇
        merged_into_person_id: null
    - claim:
        id: c_SLqf07ApXWQmZY_H36xGdl
        subject_person_id: p_V7ycLeFaKcwDLu6Nqpp4GD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7X9AD7BmdgPzHei35pEepy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bm2sLf4iMrd_O8PQoyuWVm
          claim_id: c_SLqf07ApXWQmZY_H36xGdl
          source_id: s_AuL8jjhVpgkiuUXR655ABB
          stance: supports
          locator: CBDB 双向互证（父 王仲山 ⇄ 子 王昞）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_AuL8jjhVpgkiuUXR655ABB
            source_type: api_record
            title: 中国历代人物传记资料库：王昞（CBDB 22131）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22131&o=json
            external_identifier: CBDB:22131
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.830Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7X9AD7BmdgPzHei35pEepy
        status: active
        display_name: 王昞
        merged_into_person_id: null
    - claim:
        id: c_JKY-AbLa-LVuivslWHQ3FK
        subject_person_id: p_V7ycLeFaKcwDLu6Nqpp4GD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ieUEvpNDPvse1Ag3CR1sZA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_evftiFRtgJy-K_kA3ILbE5
          claim_id: c_JKY-AbLa-LVuivslWHQ3FK
          source_id: s_Xro2zW4vVVcM82Tv4vADYn
          stance: supports
          locator: CBDB 双向互证（父 王仲山 ⇄ 子 王會）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_Xro2zW4vVVcM82Tv4vADYn
            source_type: api_record
            title: 中国历代人物传记资料库：王會（CBDB 1822）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1822&o=json
            external_identifier: CBDB:1822
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.290Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ieUEvpNDPvse1Ag3CR1sZA
        status: active
        display_name: 王會
        merged_into_person_id: null
    - claim:
        id: c_BlFyY_354AHJdG706djC3t
        subject_person_id: p_V7ycLeFaKcwDLu6Nqpp4GD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kLmDgP69qeuoA6HRjsHa4K
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_23zlxle736UQ7CIl7ZdDLi
          claim_id: c_BlFyY_354AHJdG706djC3t
          source_id: s_DVJNegumBNKCf9uv11urxN
          stance: supports
          locator: CBDB 双向互证（子 王映 ⇄ 父 王仲山）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_kLmDgP69qeuoA6HRjsHa4K
        status: active
        display_name: 王映
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_kLs6UDgzNN9XP-yxJq9OWW
        subject_person_id: p_V7ycLeFaKcwDLu6Nqpp4GD
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_xYrcuBn3tSFA4ieZH7SugN
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Zgr3PPayvEINBXXM4fuZEb
          claim_id: c_kLs6UDgzNN9XP-yxJq9OWW
          source_id: s_DVJNegumBNKCf9uv11urxN
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1572;1573：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_xYrcuBn3tSFA4ieZH7SugN
        status: active
        display_name: 王窳
        merged_into_person_id: null
  other: []
---

# 王仲山

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仲山 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_4cye1JFWBJQv2VQjyoi17i | 王㬇 | accepted |
| children | p_7X9AD7BmdgPzHei35pEepy | 王昞 | accepted |
| children | p_ieUEvpNDPvse1Ag3CR1sZA | 王會 | accepted |
| children | p_kLmDgP69qeuoA6HRjsHa4K | 王映 | accepted |
| descendants | p_xYrcuBn3tSFA4ieZH7SugN | 王窳 | accepted |

## 外部来源

- [中国历代人物传记资料库：王昞（CBDB 22131）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22131&o=json)
- [中国历代人物传记资料库：王會（CBDB 1822）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1822&o=json)
- [中国历代人物传记资料库：王仲山（CBDB 7081）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=7081&o=json)
- [中国历代人物传记资料库：王㬇（CBDB 1820）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1820&o=json)
