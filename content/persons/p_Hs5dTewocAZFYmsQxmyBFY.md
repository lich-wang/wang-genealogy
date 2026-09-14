---
schema: wang-person/v1
id: p_Hs5dTewocAZFYmsQxmyBFY
status: active
merged_into: null
display_name: 王紳
revision: 8
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bqgzDEkByz6ByFSB93kzbw
        subject_person_id: p_Hs5dTewocAZFYmsQxmyBFY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_e4W6TnQNMcQfArieto4AKm
          claim_id: c_bqgzDEkByz6ByFSB93kzbw
          source_id: s_RPqVXdBy41jDmRLX2LYLDD
          stance: supports
          locator: CBDB:202472
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（202472）
          source: &a1
            id: s_RPqVXdBy41jDmRLX2LYLDD
            source_type: api_record
            title: 中国历代人物传记资料库：王紳（CBDB 202472）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202472&o=json
            external_identifier: CBDB:202472
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.743Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_4FF883b8HJHNgxGWT6uZck
        subject_person_id: p_Hs5dTewocAZFYmsQxmyBFY
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1487年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_E4QyL2fzvC8Quhorg33K1a
          claim_id: c_4FF883b8HJHNgxGWT6uZck
          source_id: s_RPqVXdBy41jDmRLX2LYLDD
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
        id: c_NZZ7sVrg8E5KbTcwx9JLeD
        subject_person_id: p_Hs5dTewocAZFYmsQxmyBFY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紳（生于1487年），明人物。明清進士進士，籍贯滄州，入仕進士。（中国历代人物传记资料库 CBDB 202472）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_AEgdlP30_26hXDbm0J7V_R
          claim_id: c_NZZ7sVrg8E5KbTcwx9JLeD
          source_id: s_RPqVXdBy41jDmRLX2LYLDD
          stance: supports
          locator: CBDB:202472
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Q_UgkJr40FJ9RwfCnsd2B8
        subject_person_id: p_KQX7wZ6kGeHGXVBXr7RepL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Hs5dTewocAZFYmsQxmyBFY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ivJrT3fzYVnkH-KGJXqz9l
          claim_id: c_Q_UgkJr40FJ9RwfCnsd2B8
          source_id: s_kUVE4BP4DZUmzxjQje8RBQ
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第三甲第三十七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_kUVE4BP4DZUmzxjQje8RBQ
            source_type: api_record
            title: 中国历代人物传记资料库：王國寧（CBDB 288735）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288735&o=json
            external_identifier: CBDB:288735
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.301Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_KQX7wZ6kGeHGXVBXr7RepL
        status: active
        display_name: 王國寧
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_Nm07r9Qq-0Sar8y_Hj5nna
        subject_person_id: p_cDhkwNASo4LnZoHgKrkdpx
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Hs5dTewocAZFYmsQxmyBFY
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nlkoJSa04pr_ILJPB744kZ
          claim_id: c_Nm07r9Qq-0Sar8y_Hj5nna
          source_id: s_H4Py2z2rrgUhZURFJfcReg
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第三甲第三十七名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_H4Py2z2rrgUhZURFJfcReg
            source_type: api_record
            title: 中国历代人物传记资料库：王吉（CBDB 288734）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288734&o=json
            external_identifier: CBDB:288734
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.301Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_cDhkwNASo4LnZoHgKrkdpx
        status: active
        display_name: 王吉
        merged_into_person_id: null
    - claim:
        id: c_DVquuj-ROEUb8wUzsMKTAa
        subject_person_id: p_r7LepFMkECFWYe8Q6h2L8C
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Hs5dTewocAZFYmsQxmyBFY
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_G--64IOO-f0IsLMoehrgJx
          claim_id: c_DVquuj-ROEUb8wUzsMKTAa
          source_id: s_FATeHYM6fQRAALXPwB3hQV
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第三甲第三十七名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_FATeHYM6fQRAALXPwB3hQV
            source_type: api_record
            title: 中国历代人物传记资料库：王惟德（CBDB 288733）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288733&o=json
            external_identifier: CBDB:288733
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.300Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_r7LepFMkECFWYe8Q6h2L8C
        status: active
        display_name: 王惟德
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_6hh2swYnDowJ5q01LOMMfa
        subject_person_id: p_AdKipHPpgb7LqWLAgDN3XB
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Hs5dTewocAZFYmsQxmyBFY
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZQPxftxFdiRb214pUJNlBN
          claim_id: c_6hh2swYnDowJ5q01LOMMfa
          source_id: s_54mkPpGjEfSovZ1V98TYAR
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202472 王紳）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_54mkPpGjEfSovZ1V98TYAR
            source_type: api_record
            title: 中国历代人物传记资料库：王績（CBDB 288739）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288739&o=json
            external_identifier: CBDB:288739
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AdKipHPpgb7LqWLAgDN3XB
        status: active
        display_name: 王績
        merged_into_person_id: null
    - claim:
        id: c_vbY-FmR7GcyI0gVu5HKzEb
        subject_person_id: p_Hs5dTewocAZFYmsQxmyBFY
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_atfBE8SW3zcBDXScoRSUhL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1uLjGcUkiZ3vHhE_k-aoKA
          claim_id: c_vbY-FmR7GcyI0gVu5HKzEb
          source_id: s_Tp7-DuHPcuSKYN1PN_1VYF
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202472 王紳）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Tp7-DuHPcuSKYN1PN_1VYF
            source_type: api_record
            title: 中国历代人物传记资料库：王緒（CBDB 288742）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288742&o=json
            external_identifier: CBDB:288742
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_atfBE8SW3zcBDXScoRSUhL
        status: active
        display_name: 王緒
        merged_into_person_id: null
    - claim:
        id: c_qTXtc5CV0z1gDn7RZlfmef
        subject_person_id: p_Hs5dTewocAZFYmsQxmyBFY
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_eWBmW9UuYE2fe3KZ1jvovA
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6WlLs_E2dJSpVK4A-m11BG
          claim_id: c_qTXtc5CV0z1gDn7RZlfmef
          source_id: s_rG2DRVGY5y8xWx_kVCHUFj
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202472 王紳）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_rG2DRVGY5y8xWx_kVCHUFj
            source_type: api_record
            title: 中国历代人物传记资料库：王紌（CBDB 288740）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288740&o=json
            external_identifier: CBDB:288740
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_eWBmW9UuYE2fe3KZ1jvovA
        status: active
        display_name: 王紌
        merged_into_person_id: null
    - claim:
        id: c_u7dCKZRoCLxTG5ig1dRTE_
        subject_person_id: p_Hs5dTewocAZFYmsQxmyBFY
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_gX4GGz8AVWcWAUz4K38wbr
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RBVivYbzRT5ZYMCigir0Fh
          claim_id: c_u7dCKZRoCLxTG5ig1dRTE_
          source_id: s_rsVm2qlzoTa_bm0YhbNMa6
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202472 王紳）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_rsVm2qlzoTa_bm0YhbNMa6
            source_type: api_record
            title: 中国历代人物传记资料库：王縉（CBDB 288738）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288738&o=json
            external_identifier: CBDB:288738
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_gX4GGz8AVWcWAUz4K38wbr
        status: active
        display_name: 王縉
        merged_into_person_id: null
---

# 王紳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王紳 | accepted |
| birth.date | 1487年 | accepted |
| bio.summary | 王紳（生于1487年），明人物。明清進士進士，籍贯滄州，入仕進士。（中国历代人物传记资料库 CBDB 202472） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_KQX7wZ6kGeHGXVBXr7RepL | 王國寧 | accepted |
| ancestors | p_cDhkwNASo4LnZoHgKrkdpx | 王吉 | accepted |
| ancestors | p_r7LepFMkECFWYe8Q6h2L8C | 王惟德 | accepted |
| other | p_AdKipHPpgb7LqWLAgDN3XB | 王績 | accepted |
| other | p_atfBE8SW3zcBDXScoRSUhL | 王緒 | accepted |
| other | p_eWBmW9UuYE2fe3KZ1jvovA | 王紌 | accepted |
| other | p_gX4GGz8AVWcWAUz4K38wbr | 王縉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王國寧（CBDB 288735）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288735&o=json)
- [中国历代人物传记资料库：王績（CBDB 288739）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288739&o=json)
- [中国历代人物传记资料库：王吉（CBDB 288734）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288734&o=json)
- [中国历代人物传记资料库：王縉（CBDB 288738）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288738&o=json)
- [中国历代人物传记资料库：王紌（CBDB 288740）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288740&o=json)
- [中国历代人物传记资料库：王紳（CBDB 202472）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202472&o=json)
- [中国历代人物传记资料库：王惟德（CBDB 288733）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288733&o=json)
- [中国历代人物传记资料库：王緒（CBDB 288742）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288742&o=json)
