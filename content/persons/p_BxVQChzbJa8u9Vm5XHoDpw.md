---
schema: wang-person/v1
id: p_BxVQChzbJa8u9Vm5XHoDpw
status: active
merged_into: null
display_name: 王介
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Gi8CifjXHQuzB1eRMmb5z4
        subject_person_id: p_BxVQChzbJa8u9Vm5XHoDpw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王介
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pzKVsdJa1VKtSbLv6FqQVA
          claim_id: c_Gi8CifjXHQuzB1eRMmb5z4
          source_id: s_7zo4774w8QAmSiH1s1VitC
          stance: supports
          locator: CBDB:26610
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（26610）
          source: &a1
            id: s_7zo4774w8QAmSiH1s1VitC
            source_type: api_record
            title: 中国历代人物传记资料库：王介（CBDB 26610）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26610&o=json
            external_identifier: CBDB:26610
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.941Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pRSqvK5mPRnYmaTRVM7qDg
        subject_person_id: p_BxVQChzbJa8u9Vm5XHoDpw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王介，宋人物。籍贯丹徒，身份为強記;博學強記，入仕科舉制舉: 賢良方正科，曾任三司判官、殿中省尚乘奉御、賢良方正。（中国历代人物传记资料库 CBDB 26610）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_bFTMAnVXunx5bEFflC7g7o
          claim_id: c_pRSqvK5mPRnYmaTRVM7qDg
          source_id: s_7zo4774w8QAmSiH1s1VitC
          stance: supports
          locator: CBDB:26610
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_7JDY2wfrVcRv5esZJJBYQu
        subject_person_id: p_kuomB9GNqzmxZdNiXdkRAJ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BxVQChzbJa8u9Vm5XHoDpw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XPQmYoYrJ8qJv6an3OswHx
          claim_id: c_7JDY2wfrVcRv5esZJJBYQu
          source_id: s_7zo4774w8QAmSiH1s1VitC
          stance: supports
          locator: CBDB 双向互证（父 王言 ⇄ 子 王介）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_kuomB9GNqzmxZdNiXdkRAJ
        status: active
        display_name: 王言
        merged_into_person_id: null
  children:
    - claim:
        id: c_6PCd3uzoiGUmiVUANjvKaM
        subject_person_id: p_BxVQChzbJa8u9Vm5XHoDpw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BLnE9nncUpXkxeyUSBMut9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZRp_aZPkegDQ2JZssR61it
          claim_id: c_6PCd3uzoiGUmiVUANjvKaM
          source_id: s_7zo4774w8QAmSiH1s1VitC
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1986：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_BLnE9nncUpXkxeyUSBMut9
        status: active
        display_name: 王漢之
        merged_into_person_id: null
    - claim:
        id: c_9tfJDfttxSkljDNv2wMkuk
        subject_person_id: p_BxVQChzbJa8u9Vm5XHoDpw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_r2xwzD2AZHDS6BqaF6FKTv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2elsGdkSdpRAajfuon1Dcq
          claim_id: c_9tfJDfttxSkljDNv2wMkuk
          source_id: s_7zo4774w8QAmSiH1s1VitC
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1600：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_r2xwzD2AZHDS6BqaF6FKTv
        status: active
        display_name: 王沇之
        merged_into_person_id: null
    - claim:
        id: c_vhUQlWsdPUultb-k0ZSVuJ
        subject_person_id: p_BxVQChzbJa8u9Vm5XHoDpw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7ZkuLBZx4sM3DaTb2XEViR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eUfTb2flA6ViW6XpSfDJ71
          claim_id: c_vhUQlWsdPUultb-k0ZSVuJ
          source_id: s_4wBHe44bd6siK9D6AUEfUk
          stance: supports
          locator: CBDB 双向互证（父 王介 ⇄ 子 王渙之）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_4wBHe44bd6siK9D6AUEfUk
            source_type: api_record
            title: 中国历代人物传记资料库：王渙之（CBDB 26612）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26612&o=json
            external_identifier: CBDB:26612
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.941Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7ZkuLBZx4sM3DaTb2XEViR
        status: active
        display_name: 王渙之
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王介

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王介 | accepted |
| bio.summary | 王介，宋人物。籍贯丹徒，身份为強記;博學強記，入仕科舉制舉: 賢良方正科，曾任三司判官、殿中省尚乘奉御、賢良方正。（中国历代人物传记资料库 CBDB 26610） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_kuomB9GNqzmxZdNiXdkRAJ | 王言 | accepted |
| children | p_BLnE9nncUpXkxeyUSBMut9 | 王漢之 | accepted |
| children | p_r2xwzD2AZHDS6BqaF6FKTv | 王沇之 | accepted |
| children | p_7ZkuLBZx4sM3DaTb2XEViR | 王渙之 | accepted |

## 外部来源

- [中国历代人物传记资料库：王渙之（CBDB 26612）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26612&o=json)
- [中国历代人物传记资料库：王介（CBDB 26610）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26610&o=json)
