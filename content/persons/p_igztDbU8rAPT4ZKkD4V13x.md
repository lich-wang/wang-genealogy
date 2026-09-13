---
schema: wang-person/v1
id: p_igztDbU8rAPT4ZKkD4V13x
status: active
merged_into: null
display_name: 王謙夫
cbdb_id: 22931
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1nxEHiXZNfbni93B6ih4aw
        subject_person_id: p_igztDbU8rAPT4ZKkD4V13x
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王謙夫，宋人物。籍贯長溪。（中国历代人物传记资料库 CBDB 22931）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_UPyvzRzGjDaU2XdyY_I6H7
          claim_id: c_1nxEHiXZNfbni93B6ih4aw
          source_id: s_GbMZtxmmmBnEiQ1mUR72KY
          stance: supports
          locator: CBDB:22931
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_GbMZtxmmmBnEiQ1mUR72KY
            source_type: api_record
            title: 中国历代人物传记资料库：王謙夫（CBDB 22931）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22931&o=json
            external_identifier: CBDB:22931
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.019Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_n42ucAcqNK8emE3o1U5pbc
        subject_person_id: p_igztDbU8rAPT4ZKkD4V13x
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王謙夫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_4SgdZo74NV4LGi8yeDDJcj
          claim_id: c_n42ucAcqNK8emE3o1U5pbc
          source_id: s_GbMZtxmmmBnEiQ1mUR72KY
          stance: supports
          locator: CBDB:22931
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1001-1100）｜历史性依据：CBDB 朝代 = 宋
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_4flMIqdf9fAwVmk-Nbx0Tv
        subject_person_id: p_TQyk4QWwhcUUZQXxe66jDH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_igztDbU8rAPT4ZKkD4V13x
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1AAf99rmLay7FXSVGAVryx
          claim_id: c_4flMIqdf9fAwVmk-Nbx0Tv
          source_id: s_NBhoY1PJp3T71pqSaTD1Hv
          stance: supports
          locator: CBDB 双向互证（子 王謙夫 ⇄ 父 王詠）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_NBhoY1PJp3T71pqSaTD1Hv
            source_type: api_record
            title: 中国历代人物传记资料库：王詠（CBDB 22930）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22930&o=json
            external_identifier: CBDB:22930
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.865Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_TQyk4QWwhcUUZQXxe66jDH
        status: active
        display_name: 王詠
        merged_into_person_id: null
  children:
    - claim:
        id: c_as9l69AcTmaz6PVFwqJgVP
        subject_person_id: p_igztDbU8rAPT4ZKkD4V13x
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ME2jsgBkJ6bMketskkKisN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_V_3g_5YBwHaJW2BZjsWuJ4
          claim_id: c_as9l69AcTmaz6PVFwqJgVP
          source_id: s_yUJpB59QnKu97gnT2GuQqb
          stance: supports
          locator: CBDB 双向互证（父 王謙夫 ⇄ 子 王亮功）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_yUJpB59QnKu97gnT2GuQqb
            source_type: api_record
            title: 中国历代人物传记资料库：王亮功（CBDB 22932）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22932&o=json
            external_identifier: CBDB:22932
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.866Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ME2jsgBkJ6bMketskkKisN
        status: active
        display_name: 王亮功
        merged_into_person_id: null
    - claim:
        id: c_pXnlkyLm2zAXuZQlvPYGBL
        subject_person_id: p_igztDbU8rAPT4ZKkD4V13x
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_oE9BpYL1f3e76ain8qbqvi
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Feeq9UszrFKsfE9G_Jqh1a
          claim_id: c_pXnlkyLm2zAXuZQlvPYGBL
          source_id: s_GbMZtxmmmBnEiQ1mUR72KY
          stance: supports
          locator: CBDB 双向互证（子 王履初 ⇄ 父 王謙夫）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_GbMZtxmmmBnEiQ1mUR72KY
            source_type: api_record
            title: 中国历代人物传记资料库：王謙夫（CBDB 22931）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22931&o=json
            external_identifier: CBDB:22931
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.019Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_oE9BpYL1f3e76ain8qbqvi
        status: active
        display_name: 王履初
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王謙夫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王謙夫，宋人物。籍贯長溪。（中国历代人物传记资料库 CBDB 22931） | accepted |
| name.primary | 王謙夫 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_TQyk4QWwhcUUZQXxe66jDH | 王詠 | accepted |
| children | p_ME2jsgBkJ6bMketskkKisN | 王亮功 | accepted |
| children | p_oE9BpYL1f3e76ain8qbqvi | 王履初 | accepted |

## 外部来源

- [中国历代人物传记资料库：王亮功（CBDB 22932）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22932&o=json)
- [中国历代人物传记资料库：王謙夫（CBDB 22931）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22931&o=json)
- [中国历代人物传记资料库：王詠（CBDB 22930）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22930&o=json)
