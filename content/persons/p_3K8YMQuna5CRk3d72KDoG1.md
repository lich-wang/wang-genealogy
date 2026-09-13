---
schema: wang-person/v1
id: p_3K8YMQuna5CRk3d72KDoG1
status: active
merged_into: null
display_name: 王淑民
cbdb_id: 205869
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QPMKWTBurLUgTN8xfXKJ1Y
        subject_person_id: p_3K8YMQuna5CRk3d72KDoG1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淑民（生于1537年），明人物。明清進士進士，籍贯合江，入仕進士。（中国历代人物传记资料库 CBDB 205869）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_DPH-JyzNGhLG49NoyHDntz
          claim_id: c_QPMKWTBurLUgTN8xfXKJ1Y
          source_id: s_D6tC55dLNukBU896dwBvpw
          stance: supports
          locator: CBDB:205869
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_D6tC55dLNukBU896dwBvpw
            source_type: api_record
            title: 中国历代人物传记资料库：王淑民（CBDB 205869）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205869&o=json
            external_identifier: CBDB:205869
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_h1PhUcJzczLUowgsPD6iTN
        subject_person_id: p_3K8YMQuna5CRk3d72KDoG1
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1537年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1537-01-01
            latest: 1537-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZbvTLc8MXdfv6AB35TvPha
          claim_id: c_h1PhUcJzczLUowgsPD6iTN
          source_id: s_D6tC55dLNukBU896dwBvpw
          stance: supports
          locator: CBDB:205869
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1537
          source:
            id: s_D6tC55dLNukBU896dwBvpw
            source_type: api_record
            title: 中国历代人物传记资料库：王淑民（CBDB 205869）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205869&o=json
            external_identifier: CBDB:205869
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_8k3eg6K7hDXNBbeamj7EQf
        subject_person_id: p_3K8YMQuna5CRk3d72KDoG1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淑民
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ZGbzVaQXqoGEexRcFR5mE5
          claim_id: c_8k3eg6K7hDXNBbeamj7EQf
          source_id: s_D6tC55dLNukBU896dwBvpw
          stance: supports
          locator: CBDB:205869
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1537
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_b6LbboeZZ_ypk7OMxSKPy3
        subject_person_id: p_MdJHKADyMQk6VMaKNEyXK2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3K8YMQuna5CRk3d72KDoG1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JfYLaylmtfhpA9MXJNsxVV
          claim_id: c_b6LbboeZZ_ypk7OMxSKPy3
          source_id: s_Pm1DFSHsEaGPKCyweGVWKa
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第一百零四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Pm1DFSHsEaGPKCyweGVWKa
            source_type: api_record
            title: 中国历代人物传记资料库：王棟（CBDB 209976）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209976&o=json
            external_identifier: CBDB:209976
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.990Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_MdJHKADyMQk6VMaKNEyXK2
        status: active
        display_name: 王棟
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_9tV6oWMTr91oOM7ei-1zsg
        subject_person_id: p_MemBevEtxLnjXYkLG35pym
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_3K8YMQuna5CRk3d72KDoG1
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_23Dq8Lo0lDOqY8N9ZlHle6
          claim_id: c_9tV6oWMTr91oOM7ei-1zsg
          source_id: s_tS8WbRbCSoGBQ55FGhWx3P
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第一百零四名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_tS8WbRbCSoGBQ55FGhWx3P
            source_type: api_record
            title: 中国历代人物传记资料库：王信（CBDB 209974）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209974&o=json
            external_identifier: CBDB:209974
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.989Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_MemBevEtxLnjXYkLG35pym
        status: active
        display_name: 王信
        merged_into_person_id: null
    - claim:
        id: c_udkgLhtSxoUa9YNgpFoIQw
        subject_person_id: p_RNdtC5tC4dGoNM8UX7rM1Q
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_3K8YMQuna5CRk3d72KDoG1
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4dTUrbx0hRKly90YRhM-gz
          claim_id: c_udkgLhtSxoUa9YNgpFoIQw
          source_id: s_xpNPmNC8pFyJ8rBLqqstfj
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第一百零四名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_xpNPmNC8pFyJ8rBLqqstfj
            source_type: api_record
            title: 中国历代人物传记资料库：王文廣（CBDB 209975）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209975&o=json
            external_identifier: CBDB:209975
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:55.593Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_RNdtC5tC4dGoNM8UX7rM1Q
        status: active
        display_name: 王文廣
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王淑民

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王淑民（生于1537年），明人物。明清進士進士，籍贯合江，入仕進士。（中国历代人物传记资料库 CBDB 205869） | accepted |
| birth.date | 1537年 | accepted |
| name.primary | 王淑民 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_MdJHKADyMQk6VMaKNEyXK2 | 王棟 | accepted |
| ancestors | p_MemBevEtxLnjXYkLG35pym | 王信 | accepted |
| ancestors | p_RNdtC5tC4dGoNM8UX7rM1Q | 王文廣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王棟（CBDB 209976）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209976&o=json)
- [中国历代人物传记资料库：王淑民（CBDB 205869）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205869&o=json)
- [中国历代人物传记资料库：王文廣（CBDB 209975）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209975&o=json)
- [中国历代人物传记资料库：王信（CBDB 209974）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209974&o=json)
