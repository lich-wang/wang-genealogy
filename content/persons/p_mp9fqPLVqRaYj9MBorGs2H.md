---
schema: wang-person/v1
id: p_mp9fqPLVqRaYj9MBorGs2H
status: active
merged_into: null
display_name: 王炎澤
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_snPDyHVzzziF2oS6DAVcby
        subject_person_id: p_mp9fqPLVqRaYj9MBorGs2H
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王炎澤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FvmUgh29GA9WCS9cq6X4xE
          claim_id: c_snPDyHVzzziF2oS6DAVcby
          source_id: s_uzCPGMUpAMX6b1wjW5hE99
          stance: supports
          locator: CBDB:10724
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（10724）
          source: &a1
            id: s_uzCPGMUpAMX6b1wjW5hE99
            source_type: api_record
            title: 中国历代人物传记资料库：王炎澤（CBDB 10724）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10724&o=json
            external_identifier: CBDB:10724
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.562Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_a5HsNALJydkqrn5qkBG4F2
        subject_person_id: p_mp9fqPLVqRaYj9MBorGs2H
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1253年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ihCLwg9BD1KVNwTSm118NJ
          claim_id: c_a5HsNALJydkqrn5qkBG4F2
          source_id: s_uzCPGMUpAMX6b1wjW5hE99
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
        id: c_sLNXq5HMPQ2jbHj4zb6Ftr
        subject_person_id: p_mp9fqPLVqRaYj9MBorGs2H
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1332年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GSjsg1weuWbCVFaWcchNvG
          claim_id: c_sLNXq5HMPQ2jbHj4zb6Ftr
          source_id: s_uzCPGMUpAMX6b1wjW5hE99
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
        id: c_Mats8XLPfzZ6H7i9Ush4Vn
        subject_person_id: p_mp9fqPLVqRaYj9MBorGs2H
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王炎澤（1253年—1332年），元人物。籍贯義烏，身份为書院山長、業進士，入仕薦舉 (保任,保舉)，曾任縣學教諭、書院山長。（中国历代人物传记资料库 CBDB 10724）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rOLVnBq2YjJeueKXZH2piK
          claim_id: c_Mats8XLPfzZ6H7i9Ush4Vn
          source_id: s_uzCPGMUpAMX6b1wjW5hE99
          stance: supports
          locator: CBDB:10724
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_jphUglkZasNi-EanZYqLJ4
        subject_person_id: p_mp9fqPLVqRaYj9MBorGs2H
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_N462fRbh4qhNrthYQ3gtKD
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_X9aNeY6bkOkF-8ljpXT3h9
          claim_id: c_jphUglkZasNi-EanZYqLJ4
          source_id: s_2-w66EVzTSKBwRc3NKDjpm
          stance: supports
          locator: CBDB 双向互证（妻子 傅氏(王炎澤妻)）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_2-w66EVzTSKBwRc3NKDjpm
            source_type: api_record
            title: 中国历代人物传记资料库：傅氏(王炎澤妻)（CBDB 386583）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386583&o=json
            external_identifier: CBDB:386583
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_N462fRbh4qhNrthYQ3gtKD
        status: active
        display_name: 傅氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c__j8EVZa5XUGlq_bMHy3LHg
        subject_person_id: p_BEHvgFz44Nk9kRSJfRSWD8
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_mp9fqPLVqRaYj9MBorGs2H
        generation_count: 4
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xBd9X_1x3iOO11NXPDGUJC
          claim_id: c__j8EVZa5XUGlq_bMHy3LHg
          source_id: s_YPugPqGTXFMAiZ1BM5CSmX
          stance: supports
          locator: CBDB 双向互证（玄孫;四世孫 王炎澤 ⇄ 高祖;四世祖 王寓）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_YPugPqGTXFMAiZ1BM5CSmX
            source_type: api_record
            title: 中国历代人物传记资料库：王寓（CBDB 386580）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386580&o=json
            external_identifier: CBDB:386580
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.898Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_BEHvgFz44Nk9kRSJfRSWD8
        status: active
        display_name: 王寓
        merged_into_person_id: null
    - claim:
        id: c_l9WLvjq79Z7mrukaxmgz2y
        subject_person_id: p_kDSCbFbfBMQKBJLyjdUjQ9
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_mp9fqPLVqRaYj9MBorGs2H
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LZ4BUetBPG8QoBzQc4fJCr
          claim_id: c_l9WLvjq79Z7mrukaxmgz2y
          source_id: s_HA4VG2PFdZ8CT75e9Ubn5Y
          stance: supports
          locator: CBDB 双向互证（孫 王炎澤 ⇄ 祖父 王衛道）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_HA4VG2PFdZ8CT75e9Ubn5Y
            source_type: api_record
            title: 中国历代人物传记资料库：王衛道（CBDB 28102）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28102&o=json
            external_identifier: CBDB:28102
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.960Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_kDSCbFbfBMQKBJLyjdUjQ9
        status: active
        display_name: 王衛道
        merged_into_person_id: null
    - claim:
        id: c_V67VGYDengquu9Fq1eqTod
        subject_person_id: p_PEapMzWnzmpqJJJ13D8WQK
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_mp9fqPLVqRaYj9MBorGs2H
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ez3w0FtQUPoeP1hZZDN70T
          claim_id: c_V67VGYDengquu9Fq1eqTod
          source_id: s_uzCPGMUpAMX6b1wjW5hE99
          stance: supports
          locator: CBDB 双向互证（曾祖 王誠 ⇄ 曾孫; 重孫 王炎澤）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_PEapMzWnzmpqJJJ13D8WQK
        status: active
        display_name: 王誠
        merged_into_person_id: null
  descendants:
    - claim:
        id: c_aJyF2i3w22xS1WeXUmR8qI
        subject_person_id: p_mp9fqPLVqRaYj9MBorGs2H
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_NxhVtsQFEKS3B7HARgTqxM
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yxCdVWc9K0RZRCfEdVfdaa
          claim_id: c_aJyF2i3w22xS1WeXUmR8qI
          source_id: s_uzCPGMUpAMX6b1wjW5hE99
          stance: supports
          locator: 元人傳記資料索引，773：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_NxhVtsQFEKS3B7HARgTqxM
        status: active
        display_name: 王褘
        merged_into_person_id: null
    - claim:
        id: c_uV7VktDM4NzoTwfyfIQ7cT
        subject_person_id: p_mp9fqPLVqRaYj9MBorGs2H
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_GcKEHNN7xDuFEv8TuQJdGM
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GaGcXs8-pqylANotM7YNGD
          claim_id: c_uV7VktDM4NzoTwfyfIQ7cT
          source_id: s_f1F8WDMMhd3C3CsmkvJL5G
          stance: supports
          locator: CBDB 双向互证（祖父 王炎澤 ⇄ 孫 王裕）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_f1F8WDMMhd3C3CsmkvJL5G
            source_type: api_record
            title: 中国历代人物传记资料库：王裕（CBDB 28106）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28106&o=json
            external_identifier: CBDB:28106
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.964Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_GcKEHNN7xDuFEv8TuQJdGM
        status: active
        display_name: 王裕
        merged_into_person_id: null
  other: []
---

# 王炎澤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王炎澤 | accepted |
| birth.date | 1253年 | accepted |
| death.date | 1332年 | accepted |
| bio.summary | 王炎澤（1253年—1332年），元人物。籍贯義烏，身份为書院山長、業進士，入仕薦舉 (保任,保舉)，曾任縣學教諭、書院山長。（中国历代人物传记资料库 CBDB 10724） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_N462fRbh4qhNrthYQ3gtKD | 傅氏 | accepted |
| ancestors | p_BEHvgFz44Nk9kRSJfRSWD8 | 王寓 | accepted |
| ancestors | p_kDSCbFbfBMQKBJLyjdUjQ9 | 王衛道 | accepted |
| ancestors | p_PEapMzWnzmpqJJJ13D8WQK | 王誠 | accepted |
| descendants | p_NxhVtsQFEKS3B7HARgTqxM | 王褘 | accepted |
| descendants | p_GcKEHNN7xDuFEv8TuQJdGM | 王裕 | accepted |

## 外部来源

- [中国历代人物传记资料库：傅氏(王炎澤妻)（CBDB 386583）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386583&o=json)
- [中国历代人物传记资料库：王衛道（CBDB 28102）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28102&o=json)
- [中国历代人物传记资料库：王炎澤（CBDB 10724）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10724&o=json)
- [中国历代人物传记资料库：王寓（CBDB 386580）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386580&o=json)
- [中国历代人物传记资料库：王裕（CBDB 28106）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28106&o=json)
