---
schema: wang-person/v1
id: p_j4RsuRBKFYJbK5j9md2YXD
status: active
merged_into: null
display_name: 王承裕
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jAddxJYPFVuEahtjnQ2Fd5
        subject_person_id: p_j4RsuRBKFYJbK5j9md2YXD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承裕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZCEGuvneeFxAG6fgzEugzN
          claim_id: c_jAddxJYPFVuEahtjnQ2Fd5
          source_id: s_KwAAbYEBjQwNhkLyALJnCV
          stance: supports
          locator: CBDB:67772
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（67772）
          source: &a1
            id: s_KwAAbYEBjQwNhkLyALJnCV
            source_type: api_record
            title: 中国历代人物传记资料库：王承裕（CBDB 67772）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67772&o=json
            external_identifier: CBDB:67772
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.017Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_VJLFhcaV4Y4fyCLtAHJhL5
        subject_person_id: p_j4RsuRBKFYJbK5j9md2YXD
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1538年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_N4BfwwH8Zk2ai7FLYp7uAM
          claim_id: c_VJLFhcaV4Y4fyCLtAHJhL5
          source_id: s_KwAAbYEBjQwNhkLyALJnCV
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TjgPDqKyd1LGddw6tFbR5V
        subject_person_id: p_j4RsuRBKFYJbK5j9md2YXD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ADzHHf3wijkUvoBXEGBR4j
          claim_id: c_TjgPDqKyd1LGddw6tFbR5V
          source_id: s_KwAAbYEBjQwNhkLyALJnCV
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_S0mOaE3ZCz7Ll4hKti56k4
        subject_person_id: p_T2DCj9d6XKU4djHJMs2kSM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_j4RsuRBKFYJbK5j9md2YXD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BrJmeyeF7kHgVSYq2zDC9A
          claim_id: c_S0mOaE3ZCz7Ll4hKti56k4
          source_id: s_KwAAbYEBjQwNhkLyALJnCV
          stance: supports
          locator: 王文恪公集:三十六卷，29.5a：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_T2DCj9d6XKU4djHJMs2kSM
        status: active
        display_name: 王恕
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_ckXLpNyv6I-XgoCRhaEuw8
        subject_person_id: p_j4RsuRBKFYJbK5j9md2YXD
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_Qd35J9Vr9qLhrzFStDP4Qn
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8FT3yM9IZanvI1oirezeha
          claim_id: c_ckXLpNyv6I-XgoCRhaEuw8
          source_id: s_KwAAbYEBjQwNhkLyALJnCV
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第二甲第二十三名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Qd35J9Vr9qLhrzFStDP4Qn
        status: active
        display_name: 张氏
        merged_into_person_id: null
    - claim:
        id: c_h_V8GEi3T-xKJl6-RDlWfh
        subject_person_id: p_Qd35J9Vr9qLhrzFStDP4Qn
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_j4RsuRBKFYJbK5j9md2YXD
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aTNhu6cxC0qdynJxtrCPZ2
          claim_id: c_h_V8GEi3T-xKJl6-RDlWfh
          source_id: s_d4fM3ZJGKsQRoE6t5pmvQt
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第二甲第二十三名：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_d4fM3ZJGKsQRoE6t5pmvQt
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：張氏（264042）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264042&o=json
            external_identifier: CBDB:264042
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:00:05.936Z
            metadata_json: null
      object_person:
        id: p_Qd35J9Vr9qLhrzFStDP4Qn
        status: active
        display_name: 张氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_coMJK_CGabCn2hpm6AoWcd
        subject_person_id: p_tcWDCYEjZBxpgXVNCyJD9U
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_j4RsuRBKFYJbK5j9md2YXD
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dmGOZGV6cpn9yqqI69iH9V
          claim_id: c_coMJK_CGabCn2hpm6AoWcd
          source_id: s_KwAAbYEBjQwNhkLyALJnCV
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第二甲第二十三名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_tcWDCYEjZBxpgXVNCyJD9U
        status: active
        display_name: 王惟直
        merged_into_person_id: null
    - claim:
        id: c_9Rflp-BBJRdjs7XTJPMdgF
        subject_person_id: p_g1bs6h5k4Pu2preBv8KZPd
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_j4RsuRBKFYJbK5j9md2YXD
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mAeAH8g3lm4iH3VnyAvnXm
          claim_id: c_9Rflp-BBJRdjs7XTJPMdgF
          source_id: s_KwAAbYEBjQwNhkLyALJnCV
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第二甲第二十三名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_g1bs6h5k4Pu2preBv8KZPd
        status: active
        display_name: 王仲智
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王承裕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王承裕 | accepted |
| death.date | 1538年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_T2DCj9d6XKU4djHJMs2kSM | 王恕 | accepted |
| spouses | p_Qd35J9Vr9qLhrzFStDP4Qn | 张氏 | accepted |
| spouses | p_Qd35J9Vr9qLhrzFStDP4Qn | 张氏 | accepted |
| ancestors | p_tcWDCYEjZBxpgXVNCyJD9U | 王惟直 | accepted |
| ancestors | p_g1bs6h5k4Pu2preBv8KZPd | 王仲智 | accepted |

## 外部来源

- [中国历代人物传记资料库：王承裕（CBDB 67772）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67772&o=json)
- [CBDB 中国历代人物传记资料库：張氏（264042）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264042&o=json)
