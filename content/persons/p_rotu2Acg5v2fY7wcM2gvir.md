---
schema: wang-person/v1
id: p_rotu2Acg5v2fY7wcM2gvir
status: active
merged_into: null
display_name: 王英
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_U7SBk7DrDZwHu7Kni1TedW
        subject_person_id: p_rotu2Acg5v2fY7wcM2gvir
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王英
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yZBBNa7NbFr72G7Q497evB
          claim_id: c_U7SBk7DrDZwHu7Kni1TedW
          source_id: s_oWZmMvqetrNsUC4AqfBbND
          stance: supports
          locator: CBDB:157516
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（157516）
          source: &a1
            id: s_oWZmMvqetrNsUC4AqfBbND
            source_type: api_record
            title: 中国历代人物传记资料库：王英（CBDB 157516）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157516&o=json
            external_identifier: CBDB:157516
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.907Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MGgRGRLEqJkkWP3yMtgGkJ
        subject_person_id: p_rotu2Acg5v2fY7wcM2gvir
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
        - id: cs_NfyCg4XARZj57zDC7Jir4K
          claim_id: c_MGgRGRLEqJkkWP3yMtgGkJ
          source_id: s_oWZmMvqetrNsUC4AqfBbND
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
        id: c_BzlZmFR2cqj22DBNdv7fte
        subject_person_id: p_A39G1FQHHhWai3zdkp4x8V
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rotu2Acg5v2fY7wcM2gvir
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GImnyOgXIL0cC8ps5ySPEW
          claim_id: c_BzlZmFR2cqj22DBNdv7fte
          source_id: s_pWHiqL2UNhzCcvn6gaQSxk
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_pWHiqL2UNhzCcvn6gaQSxk
            source_type: api_record
            title: 中国历代人物传记资料库：王思旭（CBDB 157515）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157515&o=json
            external_identifier: CBDB:157515
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.906Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_A39G1FQHHhWai3zdkp4x8V
        status: active
        display_name: 王思旭
        merged_into_person_id: null
  children:
    - claim:
        id: c_pUlLiKPMTZ_kfcXBJMs99R
        subject_person_id: p_rotu2Acg5v2fY7wcM2gvir
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_45sVsGucdcRmogpRJoCZis
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BFN9NBVqmo0eyB0BileAvQ
          claim_id: c_pUlLiKPMTZ_kfcXBJMs99R
          source_id: s_ejeYaJmbMLDqJz5NGmDtQp
          stance: supports
          locator: 唐代墓誌匯編:二卷，Baoli 18：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ejeYaJmbMLDqJz5NGmDtQp
            source_type: api_record
            title: 中国历代人物传记资料库：王敬仲（CBDB 141578）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141578&o=json
            external_identifier: CBDB:141578
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.560Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_45sVsGucdcRmogpRJoCZis
        status: active
        display_name: 王敬仲
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王英

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王英 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_A39G1FQHHhWai3zdkp4x8V | 王思旭 | accepted |
| children | p_45sVsGucdcRmogpRJoCZis | 王敬仲 | accepted |

## 外部来源

- [中国历代人物传记资料库：王敬仲（CBDB 141578）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141578&o=json)
- [中国历代人物传记资料库：王思旭（CBDB 157515）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157515&o=json)
- [中国历代人物传记资料库：王英（CBDB 157516）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157516&o=json)
