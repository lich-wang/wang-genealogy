---
schema: wang-person/v1
id: p_vZnDcXFqAU9qkQZwwP1LXd
status: active
merged_into: null
display_name: 王鍊
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Zn1w9DEBdJuVqy8jn4cZGM
        subject_person_id: p_vZnDcXFqAU9qkQZwwP1LXd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鍊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_n7bbiSMBLf589Sp4en7TyU
          claim_id: c_Zn1w9DEBdJuVqy8jn4cZGM
          source_id: s_P67Y16BEWzE4zuobsuwyvG
          stance: supports
          locator: CBDB:141786
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（141786）
          source: &a1
            id: s_P67Y16BEWzE4zuobsuwyvG
            source_type: api_record
            title: 中国历代人物传记资料库：王鍊（CBDB 141786）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141786&o=json
            external_identifier: CBDB:141786
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.568Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_dr52ECxt1d69XuR9pTzKJ5
        subject_person_id: p_vZnDcXFqAU9qkQZwwP1LXd
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 778年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5q3kiurzMGCsRWeT3uMcM9
          claim_id: c_dr52ECxt1d69XuR9pTzKJ5
          source_id: s_P67Y16BEWzE4zuobsuwyvG
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
        id: c_SKxgMp2g3RrpTAjQWdLqTU
        subject_person_id: p_vZnDcXFqAU9qkQZwwP1LXd
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 840年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ptFCLP5H9sRRu4UhfDb5rb
          claim_id: c_SKxgMp2g3RrpTAjQWdLqTU
          source_id: s_P67Y16BEWzE4zuobsuwyvG
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
        id: c_7PMSdmWfHizHH4bDM1xCLG
        subject_person_id: p_vZnDcXFqAU9qkQZwwP1LXd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鍊（778年—840年），唐人物。籍贯京兆府。（中国历代人物传记资料库 CBDB 141786）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mVsZKAxgKafRFFxGNd2t4Z
          claim_id: c_7PMSdmWfHizHH4bDM1xCLG
          source_id: s_P67Y16BEWzE4zuobsuwyvG
          stance: supports
          locator: CBDB:141786
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ZCan-2DUmMSLf77uXDVxRx
        subject_person_id: p_NtjqGjuyLxfaZuGR1PCVjh
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vZnDcXFqAU9qkQZwwP1LXd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SSu9FS73zewgolKrTkFsVC
          claim_id: c_ZCan-2DUmMSLf77uXDVxRx
          source_id: s_9yFcVPeLWjYawJn54TYyAm
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaicheng 54：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_9yFcVPeLWjYawJn54TYyAm
            source_type: api_record
            title: 中国历代人物传记资料库：王宣（CBDB 158494）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158494&o=json
            external_identifier: CBDB:158494
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.922Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_NtjqGjuyLxfaZuGR1PCVjh
        status: active
        display_name: 王宣
        merged_into_person_id: null
  children:
    - claim:
        id: c_e-k_jrd2g-3m5vKO0Wvz05
        subject_person_id: p_vZnDcXFqAU9qkQZwwP1LXd
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_aV5Zc8BcWF5HHt1kdYi48X
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DzYcBVp5rj1-OUZWhnGPN6
          claim_id: c_e-k_jrd2g-3m5vKO0Wvz05
          source_id: s_uNLebDYEUYH4peSmTYTPmp
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaicheng 54：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_uNLebDYEUYH4peSmTYTPmp
            source_type: api_record
            title: 中国历代人物传记资料库：王敬夫（CBDB 158496）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158496&o=json
            external_identifier: CBDB:158496
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.122Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_aV5Zc8BcWF5HHt1kdYi48X
        status: active
        display_name: 王敬夫
        merged_into_person_id: null
    - claim:
        id: c_BTr8FH8wBrA_Gjfocjy7KS
        subject_person_id: p_vZnDcXFqAU9qkQZwwP1LXd
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DDArK2LAvP4GHuuKNQGNc6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2VBri-KfWFVfSwG4m9aPHJ
          claim_id: c_BTr8FH8wBrA_Gjfocjy7KS
          source_id: s_S8MkVgTvu1gJ4vd6v9f2vk
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaicheng 54：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_S8MkVgTvu1gJ4vd6v9f2vk
            source_type: api_record
            title: 中国历代人物传记资料库：王昉夫（CBDB 158499）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158499&o=json
            external_identifier: CBDB:158499
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.122Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_DDArK2LAvP4GHuuKNQGNc6
        status: active
        display_name: 王昉夫
        merged_into_person_id: null
    - claim:
        id: c_yS3LC63R35oetxExDxqZ_n
        subject_person_id: p_vZnDcXFqAU9qkQZwwP1LXd
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_H6sB99LDCuxXA25A1F7LzY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aPJGdZybnDNM-t33O8NyRf
          claim_id: c_yS3LC63R35oetxExDxqZ_n
          source_id: s_PuxbVRsqQxxGqLmt29CRLL
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaicheng 54：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_PuxbVRsqQxxGqLmt29CRLL
            source_type: api_record
            title: 中国历代人物传记资料库：王幼元（CBDB 158495）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158495&o=json
            external_identifier: CBDB:158495
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.122Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_H6sB99LDCuxXA25A1F7LzY
        status: active
        display_name: 王幼元
        merged_into_person_id: null
    - claim:
        id: c_euQGgBAAWet3wxha_L41Be
        subject_person_id: p_vZnDcXFqAU9qkQZwwP1LXd
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rrCdohRXpi6LoP537Y7aD7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gYecaDb1XYgiuwTUkoPOIR
          claim_id: c_euQGgBAAWet3wxha_L41Be
          source_id: s_GEmCHggmjgnsFaHLdJyFtP
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaicheng 54：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_GEmCHggmjgnsFaHLdJyFtP
            source_type: api_record
            title: 中国历代人物传记资料库：王磻夫（CBDB 158500）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158500&o=json
            external_identifier: CBDB:158500
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.122Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_rrCdohRXpi6LoP537Y7aD7
        status: active
        display_name: 王磻夫
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王鍊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鍊 | accepted |
| birth.date | 778年 | accepted |
| death.date | 840年 | accepted |
| bio.summary | 王鍊（778年—840年），唐人物。籍贯京兆府。（中国历代人物传记资料库 CBDB 141786） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_NtjqGjuyLxfaZuGR1PCVjh | 王宣 | accepted |
| children | p_aV5Zc8BcWF5HHt1kdYi48X | 王敬夫 | accepted |
| children | p_DDArK2LAvP4GHuuKNQGNc6 | 王昉夫 | accepted |
| children | p_H6sB99LDCuxXA25A1F7LzY | 王幼元 | accepted |
| children | p_rrCdohRXpi6LoP537Y7aD7 | 王磻夫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王昉夫（CBDB 158499）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158499&o=json)
- [中国历代人物传记资料库：王敬夫（CBDB 158496）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158496&o=json)
- [中国历代人物传记资料库：王鍊（CBDB 141786）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141786&o=json)
- [中国历代人物传记资料库：王磻夫（CBDB 158500）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158500&o=json)
- [中国历代人物传记资料库：王宣（CBDB 158494）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158494&o=json)
- [中国历代人物传记资料库：王幼元（CBDB 158495）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158495&o=json)
