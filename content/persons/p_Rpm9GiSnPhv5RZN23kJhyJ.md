---
schema: wang-person/v1
id: p_Rpm9GiSnPhv5RZN23kJhyJ
status: active
merged_into: null
display_name: 王從政
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_56kyt2P7U522NKYMpzcGyj
        subject_person_id: p_Rpm9GiSnPhv5RZN23kJhyJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王從政
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mJKre35CtQ5VBrE7mBFe43
          claim_id: c_56kyt2P7U522NKYMpzcGyj
          source_id: s_78tXJqrSZtYtfighmKiZyJ
          stance: supports
          locator: CBDB:141683
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（141683）
          source: &a1
            id: s_78tXJqrSZtYtfighmKiZyJ
            source_type: api_record
            title: 中国历代人物传记资料库：王從政（CBDB 141683）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141683&o=json
            external_identifier: CBDB:141683
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.564Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_7yoo5W96UhPHVv6569J8Si
        subject_person_id: p_Rpm9GiSnPhv5RZN23kJhyJ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 761年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pSPyLFKFzvyxiDd3dhmUtU
          claim_id: c_7yoo5W96UhPHVv6569J8Si
          source_id: s_78tXJqrSZtYtfighmKiZyJ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_hSgPhTECT4HiqsFrbaz3g7
        subject_person_id: p_Rpm9GiSnPhv5RZN23kJhyJ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 830年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PfJcTt7NgkJ3htCLkDaEeY
          claim_id: c_hSgPhTECT4HiqsFrbaz3g7
          source_id: s_78tXJqrSZtYtfighmKiZyJ
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
        id: c_Q64Qz529FjkMVvbbr5S8EM
        subject_person_id: p_Rpm9GiSnPhv5RZN23kJhyJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_B4HEk8aBxgHvJqM33Q61mz
          claim_id: c_Q64Qz529FjkMVvbbr5S8EM
          source_id: s_78tXJqrSZtYtfighmKiZyJ
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
        id: c_9QIJlfeeiVZGH2PnYRHP9i
        subject_person_id: p_Rpm9GiSnPhv5RZN23kJhyJ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1rt6JcbH3NyGscMBotBJ1B
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bXHlc_nGDfP3tjgDKCf49j
          claim_id: c_9QIJlfeeiVZGH2PnYRHP9i
          source_id: s_J3NUCnCxDDGPaAZUNQd7KD
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaicheng 2：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_J3NUCnCxDDGPaAZUNQd7KD
            source_type: api_record
            title: 中国历代人物传记资料库：王元通（CBDB 158172）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158172&o=json
            external_identifier: CBDB:158172
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.920Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1rt6JcbH3NyGscMBotBJ1B
        status: active
        display_name: 王元通
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_2fxm0FR-ZRLREMY1U94QNk
        subject_person_id: p_44BqYJB79NSZx7U895HuBk
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Rpm9GiSnPhv5RZN23kJhyJ
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nE-Czb9DNbWhGjxEkEiulw
          claim_id: c_2fxm0FR-ZRLREMY1U94QNk
          source_id: s_qxN738BoX8sV5Rs2efh2Av
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaicheng 2：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_qxN738BoX8sV5Rs2efh2Av
            source_type: api_record
            title: 中国历代人物传记资料库：王冰（CBDB 158168）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158168&o=json
            external_identifier: CBDB:158168
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.919Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_44BqYJB79NSZx7U895HuBk
        status: active
        display_name: 王冰
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王從政

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王從政 | accepted |
| birth.date | 761年 | accepted |
| death.date | 830年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_1rt6JcbH3NyGscMBotBJ1B | 王元通 | accepted |
| ancestors | p_44BqYJB79NSZx7U895HuBk | 王冰 | accepted |

## 外部来源

- [中国历代人物传记资料库：王冰（CBDB 158168）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158168&o=json)
- [中国历代人物传记资料库：王從政（CBDB 141683）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141683&o=json)
- [中国历代人物传记资料库：王元通（CBDB 158172）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158172&o=json)
