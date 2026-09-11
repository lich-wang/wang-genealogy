---
schema: wang-person/v1
id: p_hMbDUQB1GaYNgCJcxGcWWL
status: active
merged_into: null
display_name: 王璜
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xN21uwpYvuQPXxqPJD7vpi
        subject_person_id: p_hMbDUQB1GaYNgCJcxGcWWL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_h2Cchs5b1T8r1NmT5qbiTy
          claim_id: c_xN21uwpYvuQPXxqPJD7vpi
          source_id: s_qBXgxBd99XeUmj4pBc6DTT
          stance: supports
          locator: CBDB:202374
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（202374）
          source: &a1
            id: s_qBXgxBd99XeUmj4pBc6DTT
            source_type: api_record
            title: 中国历代人物传记资料库：王璜（CBDB 202374）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202374&o=json
            external_identifier: CBDB:202374
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.739Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_d1mDjSRwT6jgikKCqVDDvm
        subject_person_id: p_hMbDUQB1GaYNgCJcxGcWWL
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1381年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WMFohvPqHPcPx9CYcp9tJm
          claim_id: c_d1mDjSRwT6jgikKCqVDDvm
          source_id: s_qBXgxBd99XeUmj4pBc6DTT
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_A9A1K7bYFcT47uFLXut2sd
        subject_person_id: p_hMbDUQB1GaYNgCJcxGcWWL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璜（生于1381年），明人物。明清進士進士，籍贯代州，入仕進士。（中国历代人物传记资料库 CBDB 202374）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qYNqsZe4SnOl-ET_9eyevO
          claim_id: c_A9A1K7bYFcT47uFLXut2sd
          source_id: s_qBXgxBd99XeUmj4pBc6DTT
          stance: supports
          locator: CBDB:202374
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Xi8J0IaQCHQtZgOaIwKAjz
        subject_person_id: p_WPx4EjSn2rHqao5Mj3syGV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hMbDUQB1GaYNgCJcxGcWWL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UvNH0LJCMbaBZf_MizIDtU
          claim_id: c_Xi8J0IaQCHQtZgOaIwKAjz
          source_id: s_qBXgxBd99XeUmj4pBc6DTT
          stance: supports
          locator: 永樂十年進士登科錄:一卷，第三甲第四十名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_WPx4EjSn2rHqao5Mj3syGV
        status: active
        display_name: 王安道
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_Pkz1BVnTgRtWphKwYC6uap
        subject_person_id: p_hMbDUQB1GaYNgCJcxGcWWL
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_MwfGwStFv7RoR2AUiUf2MV
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qy-eUXVzRNchjwLpsaqweT
          claim_id: c_Pkz1BVnTgRtWphKwYC6uap
          source_id: s_ZjUU1TijGPGY0frLBPutni
          stance: supports
          locator: 永樂十年進士登科錄:一卷，第三甲第四十名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ZjUU1TijGPGY0frLBPutni
            source_type: api_record
            title: 中国历代人物传记资料库：劉氏(王璜妻)（CBDB 287104）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287104&o=json
            external_identifier: CBDB:287104
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_MwfGwStFv7RoR2AUiUf2MV
        status: active
        display_name: 劉氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_fdZVEQC8NHMEJCEqh8OIxk
        subject_person_id: p_nojPrrKJqFqJjyBvH6ZAkR
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_hMbDUQB1GaYNgCJcxGcWWL
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uskvdLGJUocVQh1-xtFda8
          claim_id: c_fdZVEQC8NHMEJCEqh8OIxk
          source_id: s_qBXgxBd99XeUmj4pBc6DTT
          stance: supports
          locator: 永樂十年進士登科錄:一卷，第三甲第四十名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_nojPrrKJqFqJjyBvH6ZAkR
        status: active
        display_name: 王仲友
        merged_into_person_id: null
    - claim:
        id: c_4hJJoDVJVYKwVDZA17uQZf
        subject_person_id: p_Kv3jzAUBZdwG1dvrCMQthg
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_hMbDUQB1GaYNgCJcxGcWWL
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5UNryF32M10cRVaTM2sDwN
          claim_id: c_4hJJoDVJVYKwVDZA17uQZf
          source_id: s_qBXgxBd99XeUmj4pBc6DTT
          stance: supports
          locator: 永樂十年進士登科錄:一卷，第三甲第四十名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Kv3jzAUBZdwG1dvrCMQthg
        status: active
        display_name: 王士弘
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王璜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璜 | accepted |
| birth.date | 1381年 | accepted |
| bio.summary | 王璜（生于1381年），明人物。明清進士進士，籍贯代州，入仕進士。（中国历代人物传记资料库 CBDB 202374） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_WPx4EjSn2rHqao5Mj3syGV | 王安道 | accepted |
| spouses | p_MwfGwStFv7RoR2AUiUf2MV | 劉氏 | accepted |
| ancestors | p_nojPrrKJqFqJjyBvH6ZAkR | 王仲友 | accepted |
| ancestors | p_Kv3jzAUBZdwG1dvrCMQthg | 王士弘 | accepted |

## 外部来源

- [中国历代人物传记资料库：劉氏(王璜妻)（CBDB 287104）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287104&o=json)
- [中国历代人物传记资料库：王璜（CBDB 202374）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202374&o=json)
