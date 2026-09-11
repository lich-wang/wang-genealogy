---
schema: wang-person/v1
id: p_UehS2yfTZaFGBh7uxhHFCE
status: active
merged_into: null
display_name: 王之翰
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3hNJA2EfhL6aX3hVTsVfeq
        subject_person_id: p_UehS2yfTZaFGBh7uxhHFCE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之翰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wAX4BqoTpQsfcSQQubMn1C
          claim_id: c_3hNJA2EfhL6aX3hVTsVfeq
          source_id: s_bTnYoQU1LPPucK9ZQ8SwH7
          stance: supports
          locator: CBDB:207104
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（207104）
          source: &a1
            id: s_bTnYoQU1LPPucK9ZQ8SwH7
            source_type: api_record
            title: 中国历代人物传记资料库：王之翰（CBDB 207104）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207104&o=json
            external_identifier: CBDB:207104
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.910Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_GUNp91W6iBDb7eXGWuF4g1
        subject_person_id: p_UehS2yfTZaFGBh7uxhHFCE
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1557年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gBtSKir6V59iBAKFbpr8EL
          claim_id: c_GUNp91W6iBDb7eXGWuF4g1
          source_id: s_bTnYoQU1LPPucK9ZQ8SwH7
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
        id: c_LmWsvCJuCJGTLBgixwnN2e
        subject_person_id: p_UehS2yfTZaFGBh7uxhHFCE
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
        - id: cs_CdBA8otuGLGU13p8sCKUSW
          claim_id: c_LmWsvCJuCJGTLBgixwnN2e
          source_id: s_bTnYoQU1LPPucK9ZQ8SwH7
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
        id: c_5szM0xOixoWqRzEb6GyeBB
        subject_person_id: p_hfNqr6f1P7uM2hMBq7xoJD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UehS2yfTZaFGBh7uxhHFCE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7PWkk3D9x0o0ODoiI0nj_x
          claim_id: c_5szM0xOixoWqRzEb6GyeBB
          source_id: s_rVUUYi5Q8bixb6BEbrMtKa
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第一百三十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_rVUUYi5Q8bixb6BEbrMtKa
            source_type: api_record
            title: 中国历代人物传记资料库：王崇（CBDB 227709）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227709&o=json
            external_identifier: CBDB:227709
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.513Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_hfNqr6f1P7uM2hMBq7xoJD
        status: active
        display_name: 王崇
        merged_into_person_id: null
  children:
    - claim:
        id: c_pVuvgFLevvnVhbF4aHidty
        subject_person_id: p_UehS2yfTZaFGBh7uxhHFCE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6TLnA9FdxSmrgfWhM649JW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_W-_pGIxDjKCumxPfVDoCYs
          claim_id: c_pVuvgFLevvnVhbF4aHidty
          source_id: s_Qe8SyPVFuTKQy1dyhabfzv
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第一百三十名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Qe8SyPVFuTKQy1dyhabfzv
            source_type: api_record
            title: 中国历代人物传记资料库：王鑑（CBDB 227724）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227724&o=json
            external_identifier: CBDB:227724
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.528Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_6TLnA9FdxSmrgfWhM649JW
        status: active
        display_name: 王鑑
        merged_into_person_id: null
    - claim:
        id: c_FJo91YjssiylrJIw9wngGB
        subject_person_id: p_UehS2yfTZaFGBh7uxhHFCE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eW4eTPBHDjMx65PJvabCUM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DQf_eJoQcLM2ycsPZyZVcL
          claim_id: c_FJo91YjssiylrJIw9wngGB
          source_id: s_PohLVM5c7JpNSHE8Lz3a88
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第一百三十名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_PohLVM5c7JpNSHE8Lz3a88
            source_type: api_record
            title: 中国历代人物传记资料库：王錦（CBDB 227726）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227726&o=json
            external_identifier: CBDB:227726
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.531Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_eW4eTPBHDjMx65PJvabCUM
        status: active
        display_name: 王錦
        merged_into_person_id: null
    - claim:
        id: c_4TFHVshTSzDnZp7eemQq2U
        subject_person_id: p_UehS2yfTZaFGBh7uxhHFCE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_J8zEtbSsEBDyvRer5K9Mdx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YN66takJq7EaqVon6uNsZj
          claim_id: c_4TFHVshTSzDnZp7eemQq2U
          source_id: s_JpFHQFhf5auqHvJtnBz8ew
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第一百三十名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_JpFHQFhf5auqHvJtnBz8ew
            source_type: api_record
            title: 中国历代人物传记资料库：王鎮（CBDB 227723）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227723&o=json
            external_identifier: CBDB:227723
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.526Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_J8zEtbSsEBDyvRer5K9Mdx
        status: active
        display_name: 王鎮
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_o9Yg-FFJKA7ec6_EVulC92
        subject_person_id: p_2qDFnQGzqiHheeCqmHKnxS
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_UehS2yfTZaFGBh7uxhHFCE
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6eBg2ZNHCrtaS8i5-_SPmn
          claim_id: c_o9Yg-FFJKA7ec6_EVulC92
          source_id: s_pcdCmbxyuz1C8JPyT62N6k
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第一百三十名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_pcdCmbxyuz1C8JPyT62N6k
            source_type: api_record
            title: 中国历代人物传记资料库：王談（CBDB 227708）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227708&o=json
            external_identifier: CBDB:227708
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.511Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2qDFnQGzqiHheeCqmHKnxS
        status: active
        display_name: 王談
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王之翰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之翰 | accepted |
| birth.date | 1557年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_hfNqr6f1P7uM2hMBq7xoJD | 王崇 | accepted |
| children | p_6TLnA9FdxSmrgfWhM649JW | 王鑑 | accepted |
| children | p_eW4eTPBHDjMx65PJvabCUM | 王錦 | accepted |
| children | p_J8zEtbSsEBDyvRer5K9Mdx | 王鎮 | accepted |
| ancestors | p_2qDFnQGzqiHheeCqmHKnxS | 王談 | accepted |

## 外部来源

- [中国历代人物传记资料库：王崇（CBDB 227709）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227709&o=json)
- [中国历代人物传记资料库：王鑑（CBDB 227724）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227724&o=json)
- [中国历代人物传记资料库：王錦（CBDB 227726）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227726&o=json)
- [中国历代人物传记资料库：王談（CBDB 227708）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227708&o=json)
- [中国历代人物传记资料库：王鎮（CBDB 227723）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227723&o=json)
- [中国历代人物传记资料库：王之翰（CBDB 207104）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207104&o=json)
