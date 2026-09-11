---
schema: wang-person/v1
id: p_DNERe7qJNb3V7E5Uc4DPd7
status: active
merged_into: null
display_name: 王竑
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EocrbrQvpiB2SntULzi6S9
        subject_person_id: p_DNERe7qJNb3V7E5Uc4DPd7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王竑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3ALJw1q4RgeZ3G74wDdcmP
          claim_id: c_EocrbrQvpiB2SntULzi6S9
          source_id: s_gGJgZArxs2CRiEaQd8Eu1r
          stance: supports
          locator: CBDB:67649
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（67649）
          source: &a1
            id: s_gGJgZArxs2CRiEaQd8Eu1r
            source_type: api_record
            title: 中国历代人物传记资料库：王竑（CBDB 67649）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67649&o=json
            external_identifier: CBDB:67649
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.000Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_afaQgUuiAesb4R1ZBEkpkW
        subject_person_id: p_DNERe7qJNb3V7E5Uc4DPd7
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1414年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BJPeb62Mm9gax49MFZrf9D
          claim_id: c_afaQgUuiAesb4R1ZBEkpkW
          source_id: s_gGJgZArxs2CRiEaQd8Eu1r
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
        id: c_pv2gQrDJC3X1CaxpPw2ZN8
        subject_person_id: p_DNERe7qJNb3V7E5Uc4DPd7
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1488年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hCMJDGnhXjFXDrEAL3u5C5
          claim_id: c_pv2gQrDJC3X1CaxpPw2ZN8
          source_id: s_gGJgZArxs2CRiEaQd8Eu1r
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
        id: c_FchpmsQmXWafYWQEbHVmd2
        subject_person_id: p_DNERe7qJNb3V7E5Uc4DPd7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王竑（1414年—1488年），明人物。明清進士進士，籍贯江夏，入仕進士，曾任兵部尚書、布政使司參政、都察院右僉都御史。（中国历代人物传记资料库 CBDB 67649）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_d17fkYrLb_jdt0XeUiBZne
          claim_id: c_FchpmsQmXWafYWQEbHVmd2
          source_id: s_gGJgZArxs2CRiEaQd8Eu1r
          stance: supports
          locator: CBDB:67649
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_G_NGtiYSirfVCkSgFDdjoI
        subject_person_id: p_wxNC97go3Ly1JHGAcv6FvX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DNERe7qJNb3V7E5Uc4DPd7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ETL4KBad3Tev-8AMsQ6Dms
          claim_id: c_G_NGtiYSirfVCkSgFDdjoI
          source_id: s_Wyjt1N8YUYBKZKFvA9KBTB
          stance: supports
          locator: 正統四年進士登科錄:一卷，第二甲第三十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Wyjt1N8YUYBKZKFvA9KBTB
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王佐（236878）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236878&o=json
            external_identifier: CBDB:236878
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:33.683Z
            metadata_json: null
      object_person:
        id: p_wxNC97go3Ly1JHGAcv6FvX
        status: active
        display_name: 王佐
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_33qnAPbQsjll0z3RqfnJyR
        subject_person_id: p_xtFwKEaqPdvp16DkbDgGzk
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_DNERe7qJNb3V7E5Uc4DPd7
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vmk3RSeAq28XZup3SdZkAn
          claim_id: c_33qnAPbQsjll0z3RqfnJyR
          source_id: s_uyMqx86LVgdGn3q8eyKwoP
          stance: supports
          locator: 正統四年進士登科錄:一卷，第二甲第三十名：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_uyMqx86LVgdGn3q8eyKwoP
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：孫氏（236880）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236880&o=json
            external_identifier: CBDB:236880
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:36.554Z
            metadata_json: null
      object_person:
        id: p_xtFwKEaqPdvp16DkbDgGzk
        status: active
        display_name: 孙氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_aveRf0RC1KtHuO53fyY0mI
        subject_person_id: p_C9xm5jCmEkeQHuYEcbM82J
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_DNERe7qJNb3V7E5Uc4DPd7
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yscaS50b--sE8ffGNFj3Yz
          claim_id: c_aveRf0RC1KtHuO53fyY0mI
          source_id: s_aUtqpncrA5mpaxDZBmduGw
          stance: supports
          locator: 正統四年進士登科錄:一卷，第二甲第三十名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_aUtqpncrA5mpaxDZBmduGw
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王景（236876）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236876&o=json
            external_identifier: CBDB:236876
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person:
        id: p_C9xm5jCmEkeQHuYEcbM82J
        status: active
        display_name: 王景
        merged_into_person_id: null
    - claim:
        id: c_I_UobZfpY94ucUxIZDVlZ2
        subject_person_id: p_yaK3v157GQYGTQP5RhE7JJ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_DNERe7qJNb3V7E5Uc4DPd7
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mm3jwbzAtrLX8DqTv0n1_k
          claim_id: c_I_UobZfpY94ucUxIZDVlZ2
          source_id: s_HKKP3v91AaD88vdZnQWk2v
          stance: supports
          locator: 正統四年進士登科錄:一卷，第二甲第三十名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_HKKP3v91AaD88vdZnQWk2v
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王俊卿（236877）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236877&o=json
            external_identifier: CBDB:236877
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:38.977Z
            metadata_json: null
      object_person:
        id: p_yaK3v157GQYGTQP5RhE7JJ
        status: active
        display_name: 王俊卿
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王竑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王竑 | accepted |
| birth.date | 1414年 | accepted |
| death.date | 1488年 | accepted |
| bio.summary | 王竑（1414年—1488年），明人物。明清進士進士，籍贯江夏，入仕進士，曾任兵部尚書、布政使司參政、都察院右僉都御史。（中国历代人物传记资料库 CBDB 67649） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_wxNC97go3Ly1JHGAcv6FvX | 王佐 | accepted |
| spouses | p_xtFwKEaqPdvp16DkbDgGzk | 孙氏 | accepted |
| ancestors | p_C9xm5jCmEkeQHuYEcbM82J | 王景 | accepted |
| ancestors | p_yaK3v157GQYGTQP5RhE7JJ | 王俊卿 | accepted |

## 外部来源

- [中国历代人物传记资料库：王竑（CBDB 67649）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67649&o=json)
- [CBDB 中国历代人物传记资料库：孫氏（236880）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236880&o=json)
- [CBDB 中国历代人物传记资料库：王景（236876）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236876&o=json)
- [CBDB 中国历代人物传记资料库：王俊卿（236877）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236877&o=json)
- [CBDB 中国历代人物传记资料库：王佐（236878）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236878&o=json)
