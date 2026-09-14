---
schema: wang-person/v1
id: p_YyANARVNyNvBnk5riMJd4z
status: active
merged_into: null
display_name: 王庶
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ERaafxDWbg888mscMa3C5x
        subject_person_id: p_YyANARVNyNvBnk5riMJd4z
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3PDA1gYmn6HFb2KHZGxAXg
          claim_id: c_ERaafxDWbg888mscMa3C5x
          source_id: s_jr4u1PpFa2nwU1h17BFX4A
          stance: supports
          locator: CBDB:1878
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1878）
          source: &a1
            id: s_jr4u1PpFa2nwU1h17BFX4A
            source_type: api_record
            title: 中国历代人物传记资料库：王庶（CBDB 1878）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1878&o=json
            external_identifier: CBDB:1878
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.368Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_w8TPhE4QAHKqU6YmCwgoBf
        subject_person_id: p_YyANARVNyNvBnk5riMJd4z
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1143年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1rvELHT5Ag4YNU6R7PYtnZ
          claim_id: c_w8TPhE4QAHKqU6YmCwgoBf
          source_id: s_jr4u1PpFa2nwU1h17BFX4A
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
        id: c_Q88L3h8fHTrUCAVqUVSmAo
        subject_person_id: p_YyANARVNyNvBnk5riMJd4z
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庶（卒于1143年），宋人物。籍贯慶陽府，身份为削籍官員，入仕進士，曾任樞密使、同知樞密院事、兵部尚書。（中国历代人物传记资料库 CBDB 1878）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_pEhxxbQv4Gob2Z48EgxV-Z
          claim_id: c_Q88L3h8fHTrUCAVqUVSmAo
          source_id: s_jr4u1PpFa2nwU1h17BFX4A
          stance: supports
          locator: CBDB:1878
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_cTfsdsj0v2V7Q3ayhPSlm8
        subject_person_id: p_NWD6tzMxEyomjXxFXMQ1yX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_YyANARVNyNvBnk5riMJd4z
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xcMQXCxUyfhai-objM1FOt
          claim_id: c_cTfsdsj0v2V7Q3ayhPSlm8
          source_id: s_WXGYTyp84DG9LKfvhp2sDW
          stance: supports
          locator: 宋人傳記資料索引(電子版)，888;889：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_WXGYTyp84DG9LKfvhp2sDW
            source_type: api_record
            title: 中国历代人物传记资料库：王茂（CBDB 13755）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=13755&o=json
            external_identifier: CBDB:13755
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.626Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_NWD6tzMxEyomjXxFXMQ1yX
        status: active
        display_name: 王茂
        merged_into_person_id: null
  children:
    - claim:
        id: c_s-WpX0omqZh-bSmdoMd9HT
        subject_person_id: p_YyANARVNyNvBnk5riMJd4z
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8NZ4VgcCXbsb12m8DpzJUp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dZMnqpw69PoyuG4zxqZgut
          claim_id: c_s-WpX0omqZh-bSmdoMd9HT
          source_id: s_F6mJE2BDLDoiL6L6tfe3QE
          stance: supports
          locator: CBDB 双向互证（父 王庶 ⇄ 子 王之道）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_F6mJE2BDLDoiL6L6tfe3QE
            source_type: api_record
            title: 中国历代人物传记资料库：王之道（CBDB 13758）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=13758&o=json
            external_identifier: CBDB:13758
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.629Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_8NZ4VgcCXbsb12m8DpzJUp
        status: active
        display_name: 王之道
        merged_into_person_id: null
    - claim:
        id: c_VuOB3H6dtJ-aW7m3-4379L
        subject_person_id: p_YyANARVNyNvBnk5riMJd4z
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dGeVmKUMk8CpVvhVSEDqhC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7GoRJ7D2WfRdydQOnYQyuQ
          claim_id: c_VuOB3H6dtJ-aW7m3-4379L
          source_id: s_FMJ2LAaN3BtytRAcDPqkKV
          stance: supports
          locator: CBDB 双向互证（父 王庶 ⇄ 子 王之奇）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_FMJ2LAaN3BtytRAcDPqkKV
            source_type: api_record
            title: 中国历代人物传记资料库：王之奇（CBDB 13756）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=13756&o=json
            external_identifier: CBDB:13756
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.627Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_dGeVmKUMk8CpVvhVSEDqhC
        status: active
        display_name: 王之奇
        merged_into_person_id: null
    - claim:
        id: c_7R7TRG7l2OKYZbqMuJkWeb
        subject_person_id: p_YyANARVNyNvBnk5riMJd4z
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cDXcgiX7Uo6NbRZKNL5dpP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LO0ZAp8hcyRCtFkuFm9Vnr
          claim_id: c_7R7TRG7l2OKYZbqMuJkWeb
          source_id: s_cuCFE6z5YCWv7bb3AhkGCx
          stance: supports
          locator: CBDB 亲属：父（KinPerson 1878）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_cuCFE6z5YCWv7bb3AhkGCx
            source_type: api_record
            title: 中国历代人物传记资料库：王之荀（CBDB 13757）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=13757&o=json
            external_identifier: CBDB:13757
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_cDXcgiX7Uo6NbRZKNL5dpP
        status: active
        display_name: 王之荀
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王庶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王庶 | accepted |
| death.date | 1143年 | accepted |
| bio.summary | 王庶（卒于1143年），宋人物。籍贯慶陽府，身份为削籍官員，入仕進士，曾任樞密使、同知樞密院事、兵部尚書。（中国历代人物传记资料库 CBDB 1878） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_NWD6tzMxEyomjXxFXMQ1yX | 王茂 | accepted |
| children | p_8NZ4VgcCXbsb12m8DpzJUp | 王之道 | accepted |
| children | p_dGeVmKUMk8CpVvhVSEDqhC | 王之奇 | accepted |
| children | p_cDXcgiX7Uo6NbRZKNL5dpP | 王之荀 | accepted |

## 外部来源

- [中国历代人物传记资料库：王茂（CBDB 13755）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=13755&o=json)
- [中国历代人物传记资料库：王庶（CBDB 1878）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1878&o=json)
- [中国历代人物传记资料库：王之道（CBDB 13758）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=13758&o=json)
- [中国历代人物传记资料库：王之奇（CBDB 13756）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=13756&o=json)
- [中国历代人物传记资料库：王之荀（CBDB 13757）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=13757&o=json)
