---
schema: wang-person/v1
id: p_A39G1FQHHhWai3zdkp4x8V
status: active
merged_into: null
display_name: 王思旭
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LmreaXLEeh5LchN8oQzp5h
        subject_person_id: p_A39G1FQHHhWai3zdkp4x8V
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思旭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5D4aYyffKjPfSHA2izFAkn
          claim_id: c_LmreaXLEeh5LchN8oQzp5h
          source_id: s_pWHiqL2UNhzCcvn6gaQSxk
          stance: supports
          locator: CBDB:157515
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（157515）
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GoVBzLjuub74mpAzH2exeS
        subject_person_id: p_A39G1FQHHhWai3zdkp4x8V
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思旭，唐人物。籍贯樂安，曾任太守。（中国历代人物传记资料库 CBDB 157515）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BWo-oDJ-GMiqRs-9sKtCv_
          claim_id: c_GoVBzLjuub74mpAzH2exeS
          source_id: s_pWHiqL2UNhzCcvn6gaQSxk
          stance: supports
          locator: CBDB:157515
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_BQXNPbabTcok73DUYP5GoP
        subject_person_id: p_iQVDgJFY1pc4NSZHQh5uPw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_A39G1FQHHhWai3zdkp4x8V
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8xjTZ1DY1NGV-vjTEIElb2
          claim_id: c_BQXNPbabTcok73DUYP5GoP
          source_id: s_pWHiqL2UNhzCcvn6gaQSxk
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_iQVDgJFY1pc4NSZHQh5uPw
        status: active
        display_name: 王諝
        merged_into_person_id: null
  children:
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
          source: *a1
      object_person:
        id: p_rotu2Acg5v2fY7wcM2gvir
        status: active
        display_name: 王英
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_BQqhuH-Gnk5td00K8GN5Re
        subject_person_id: p_A39G1FQHHhWai3zdkp4x8V
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_45sVsGucdcRmogpRJoCZis
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_41SkTGL-OwGabEJ6KHOSGY
          claim_id: c_BQqhuH-Gnk5td00K8GN5Re
          source_id: s_ejeYaJmbMLDqJz5NGmDtQp
          stance: supports
          locator: 唐代墓誌匯編:二卷，Baoli 18：祖父
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
  other: []
---

# 王思旭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王思旭 | accepted |
| bio.summary | 王思旭，唐人物。籍贯樂安，曾任太守。（中国历代人物传记资料库 CBDB 157515） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_iQVDgJFY1pc4NSZHQh5uPw | 王諝 | accepted |
| children | p_rotu2Acg5v2fY7wcM2gvir | 王英 | accepted |
| descendants | p_45sVsGucdcRmogpRJoCZis | 王敬仲 | accepted |

## 外部来源

- [中国历代人物传记资料库：王敬仲（CBDB 141578）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141578&o=json)
- [中国历代人物传记资料库：王思旭（CBDB 157515）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157515&o=json)
