---
schema: wang-person/v1
id: p_yw8Ldi3TsRvFBDPd73FPjN
status: active
merged_into: null
display_name: 王玉
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_G638vD18WeWeKQ5kiwGAp6
        subject_person_id: p_yw8Ldi3TsRvFBDPd73FPjN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AMGBVdknWYfpEya4dfKVUK
          claim_id: c_G638vD18WeWeKQ5kiwGAp6
          source_id: s_k2JpvCpagP4WeB4NWMHH41
          stance: supports
          locator: CBDB:143515
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（143515）
          source: &a1
            id: s_k2JpvCpagP4WeB4NWMHH41
            source_type: api_record
            title: 中国历代人物传记资料库：王玉（CBDB 143515）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143515&o=json
            external_identifier: CBDB:143515
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.624Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_iacdTUqSYDq5Ea6kUTnX2d
        subject_person_id: p_yw8Ldi3TsRvFBDPd73FPjN
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 769年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LXxJ6fuYfgEW79Jy1ZGmTC
          claim_id: c_iacdTUqSYDq5Ea6kUTnX2d
          source_id: s_k2JpvCpagP4WeB4NWMHH41
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
        id: c_fNz3kXNLzeqcfriW5113T9
        subject_person_id: p_yw8Ldi3TsRvFBDPd73FPjN
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 841年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_68cQ19DzidFCzLQiEj4ZHR
          claim_id: c_fNz3kXNLzeqcfriW5113T9
          source_id: s_k2JpvCpagP4WeB4NWMHH41
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
        id: c_Z917u69WcvdeHEALbwY1JB
        subject_person_id: p_yw8Ldi3TsRvFBDPd73FPjN
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
        - id: cs_za8jemWp7FynCZkRHcDC4B
          claim_id: c_Z917u69WcvdeHEALbwY1JB
          source_id: s_k2JpvCpagP4WeB4NWMHH41
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
        id: c_WrsAbDOYO4gsW1chPXU_fC
        subject_person_id: p_7E6gPyjzh8j7LkwEcAWwmH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yw8Ldi3TsRvFBDPd73FPjN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PWElb7QMXOsnhQrsnQmFPo
          claim_id: c_WrsAbDOYO4gsW1chPXU_fC
          source_id: s_nVLEsovCk3fqXGYbyog1XR
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_nVLEsovCk3fqXGYbyog1XR
            source_type: api_record
            title: 中国历代人物传记资料库：王清（CBDB 169430）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169430&o=json
            external_identifier: CBDB:169430
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.016Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7E6gPyjzh8j7LkwEcAWwmH
        status: active
        display_name: 王清
        merged_into_person_id: null
  children:
    - claim:
        id: c_NHTldfI6a6lmz_CCbZe9EN
        subject_person_id: p_yw8Ldi3TsRvFBDPd73FPjN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Rj9iz6Fm1o251aqB3EAvSY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hMcNIhtGtwC3Yxzuz8nyim
          claim_id: c_NHTldfI6a6lmz_CCbZe9EN
          source_id: s_M2PLhHkt74KRsqd3fqDVvr
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Dazhong75：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_M2PLhHkt74KRsqd3fqDVvr
            source_type: api_record
            title: 中国历代人物传记资料库：王道興（CBDB 167692）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=167692&o=json
            external_identifier: CBDB:167692
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.994Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Rj9iz6Fm1o251aqB3EAvSY
        status: active
        display_name: 王道興
        merged_into_person_id: null
    - claim:
        id: c_8FqgVvkAVGINWEFFiiYfMd
        subject_person_id: p_yw8Ldi3TsRvFBDPd73FPjN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vkvG2A7ta6iDdauCDcP2NZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HKckdRvXIZ4cWeLt-ACLDs
          claim_id: c_8FqgVvkAVGINWEFFiiYfMd
          source_id: s_GEfHQZcQU3k7m51A2poAEo
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Dazhong75：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_GEfHQZcQU3k7m51A2poAEo
            source_type: api_record
            title: 中国历代人物传记资料库：王三娘（CBDB 167693）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=167693&o=json
            external_identifier: CBDB:167693
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.995Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_vkvG2A7ta6iDdauCDcP2NZ
        status: active
        display_name: 王三娘
        merged_into_person_id: null
    - claim:
        id: c_k8KFatK8SNy4gWU7Q7ULWL
        subject_person_id: p_yw8Ldi3TsRvFBDPd73FPjN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5cv9NCtG3iqJGamGiZ5ED9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tt33Ln4VQ5SW10uDzSW20N
          claim_id: c_k8KFatK8SNy4gWU7Q7ULWL
          source_id: s_RTqVmPSPEVNjWsozSa5FEZ
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Dazhong75：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_RTqVmPSPEVNjWsozSa5FEZ
            source_type: api_record
            title: 中国历代人物传记资料库：王六娘（CBDB 167695）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=167695&o=json
            external_identifier: CBDB:167695
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.741Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_5cv9NCtG3iqJGamGiZ5ED9
        status: active
        display_name: 王六娘
        merged_into_person_id: null
    - claim:
        id: c_Rl5LBOvf5ALBdjEJmwnzL0
        subject_person_id: p_yw8Ldi3TsRvFBDPd73FPjN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7mRmVnkyg3jB6Y4Z8gsExS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RkAlHkS7pZi7VC-XQP8Ldy
          claim_id: c_Rl5LBOvf5ALBdjEJmwnzL0
          source_id: s_jDPM8xhpQCQ58iPbr86LK9
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Dazhong75：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_jDPM8xhpQCQ58iPbr86LK9
            source_type: api_record
            title: 中国历代人物传记资料库：王五娘（CBDB 167694）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=167694&o=json
            external_identifier: CBDB:167694
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.741Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_7mRmVnkyg3jB6Y4Z8gsExS
        status: active
        display_name: 王五娘
        merged_into_person_id: null
    - claim:
        id: c_uOcRbaGDl8lBPd8IuKIXUN
        subject_person_id: p_yw8Ldi3TsRvFBDPd73FPjN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DKRLuAgwgTRgJfLmZTodUd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TU5AcNEzVXO-pl3kEupuIE
          claim_id: c_uOcRbaGDl8lBPd8IuKIXUN
          source_id: s_uwdwfMbaAV7GFV6zWR6h1j
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Dazhong75：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_uwdwfMbaAV7GFV6zWR6h1j
            source_type: api_record
            title: 中国历代人物传记资料库：王道進（CBDB 167691）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=167691&o=json
            external_identifier: CBDB:167691
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.741Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_DKRLuAgwgTRgJfLmZTodUd
        status: active
        display_name: 王道進
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_6S7PiF5Kwk5KeckwTY1UiE
        subject_person_id: p_fPJxFS18uHAM4wH2bHoPQT
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_yw8Ldi3TsRvFBDPd73FPjN
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cLf1jIa-u0xRzxWTBgA_YB
          claim_id: c_6S7PiF5Kwk5KeckwTY1UiE
          source_id: s_txHj7A9ZBZBniukpTmrvQL
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Dazhong75：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_txHj7A9ZBZBniukpTmrvQL
            source_type: api_record
            title: 中国历代人物传记资料库：王毅（CBDB 167688）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=167688&o=json
            external_identifier: CBDB:167688
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.993Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_fPJxFS18uHAM4wH2bHoPQT
        status: active
        display_name: 王毅
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王玉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王玉 | accepted |
| birth.date | 769年 | accepted |
| death.date | 841年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_7E6gPyjzh8j7LkwEcAWwmH | 王清 | accepted |
| children | p_Rj9iz6Fm1o251aqB3EAvSY | 王道興 | accepted |
| children | p_vkvG2A7ta6iDdauCDcP2NZ | 王三娘 | accepted |
| children | p_5cv9NCtG3iqJGamGiZ5ED9 | 王六娘 | accepted |
| children | p_7mRmVnkyg3jB6Y4Z8gsExS | 王五娘 | accepted |
| children | p_DKRLuAgwgTRgJfLmZTodUd | 王道進 | accepted |
| ancestors | p_fPJxFS18uHAM4wH2bHoPQT | 王毅 | accepted |

## 外部来源

- [中国历代人物传记资料库：王道進（CBDB 167691）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=167691&o=json)
- [中国历代人物传记资料库：王道興（CBDB 167692）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=167692&o=json)
- [中国历代人物传记资料库：王六娘（CBDB 167695）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=167695&o=json)
- [中国历代人物传记资料库：王清（CBDB 169430）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169430&o=json)
- [中国历代人物传记资料库：王三娘（CBDB 167693）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=167693&o=json)
- [中国历代人物传记资料库：王五娘（CBDB 167694）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=167694&o=json)
- [中国历代人物传记资料库：王毅（CBDB 167688）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=167688&o=json)
- [中国历代人物传记资料库：王玉（CBDB 143515）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143515&o=json)
